$(function () {

    const $horizontalRuler = $('#ruler-horizontal');
    const $verticalRuler = $('#ruler-vertical');

    const defaultCanvasWidth = 850;
    const defaultCanvasHeight = 1100;


    const snapDistance = 10;
    const gridSize = 100;
    let spatialGrid = {};
    let snapLines = [];







    const canvas = new fabric.Canvas('canvas');

    canvas.backgroundColor = "#ffffff";

    function resizeCanvasByBrowserWindowSize() {
        const container = $('#canvas-out-container');
        canvas.setWidth(container.width() - 50);
        canvas.setHeight(container.height() - 50);
    }

    //$(window).on('resize', resizeCanvasByBrowserWindowSize);

    function updateCanvasSizeFromSetting() {
        let newWidth = $('#input_canvas_width').val();
        let newHeight = $('#input_canvas_height').val();

        if (newWidth < 100) {
            newWidth = 100;
            $('#input_canvas_width').val(newWidth);
        }
        else if (newWidth > 4000) {
            newWidth = 4000;
            $('#input_canvas_width').val(newWidth);
        }

        if (newHeight < 100) {
            newHeight = 100;
            $('#input_canvas_height').val(newHeight);
        }
        else if (newHeight > 4000) {
            newHeight = 4000;
            $('#input_canvas_height').val(newHeight);
        }

        const width = Math.min(parseInt(newWidth, 10) || 0, 8000);
        const height = Math.min(parseInt(newHeight, 10) || 0, 8000);

        canvas.setWidth(width);
        canvas.setHeight(height);

        createHorizontalRuler();
        createVerticalRuler();
    }


    function createHorizontalRuler() {
        $horizontalRuler.empty(); // Clear any existing ruler markings
        for (let i = 0; i <= canvas.width; i += 10) {
            const $div = $('<div></div>')
                .addClass('relative flex-shrink-0')
                .css({
                    width: '10px',
                    height: i % 100 === 0 ? '15px' : '7px',
                    borderLeft: '1px solid #999',
                    position: 'relative',
                    bottom: 0,
                });

            if (i % 100 === 0) {
                $('<span></span>')
                    .addClass('absolute')
                    .css({
                        left: (i === 0) ? '1px' : '1px',
                        bottom: '10px',
                    })
                    .text(i)
                    .appendTo($div);
            }

            $horizontalRuler.append($div);
        }
    }

    // Function to create vertical ruler
    function createVerticalRuler() {
        $verticalRuler.empty(); // Clear any existing ruler markings
        for (let i = 0; i <= canvas.height; i += 10) {
            const $div = $('<div></div>')
                .addClass('relative flex-shrink-0')
                .css({
                    height: '10px',
                    width: i % 100 === 0 ? '15px' : '7px',
                    borderTop: '1px solid #999',
                    position: 'relative',
                    right: 0, // Align marker to right
                });

            if (i % 100 === 0) {
                $('<span></span>')
                    .addClass('absolute')
                    .css({
                        right: '10px', // Align number to right
                        top: (i === 0) ? '1px' : '1px',
                    })
                    .text(i)
                    .appendTo($div);
            }

            $verticalRuler.append($div);
        }
    }



    resizeCanvasByBrowserWindowSize();

    // canvas.setWidth(defaultCanvasWidth);
    // canvas.setHeight(defaultCanvasHeight);

    $('#input_canvas_width').val(canvas.width);
    $('#input_canvas_height').val(canvas.height);

    $('#input_canvas_width').on('blur', updateCanvasSizeFromSetting);
    $('#input_canvas_height').on('blur', updateCanvasSizeFromSetting);


    // Create rulers
    createHorizontalRuler();
    createVerticalRuler();

    $('#toggle-ruler').click(function () {
        $horizontalRuler.toggleClass('hidden');
        $verticalRuler.toggleClass('hidden');
    });

    var undoStack = [];
    var redoStack = [];
    var isUndoingOrRedoing = false;

    function saveCanvasState() {
        var json = JSON.stringify(canvas.toJSON());
        undoStack.push(json);
        redoStack = [];
    }



    saveCanvasState();




    function addRectangle(left, top) {
        const rect = new fabric.Rect({
            left: left,
            top: top,
            fill: '#cccccc',
            width: 200,
            height: 100,
            angle: 0
        });
        canvas.add(rect);

        saveCanvasState();
    }


    function addCircle(left, top) {
        const circle = new fabric.Circle({
            left: left,
            top: top,
            fill: '#cccccc',
            radius: 50
        });
        canvas.add(circle);

        saveCanvasState();
    }


    function addText(left, top, options = {}) {
        const text = new fabric.Textbox('Input your text here', {
            left: left,
            top: top,
            width: 240,
            fill: options.fill || '#000000',
            fontSize: options.fontSize || 24,
            fontFamily: options.fontFamily || 'Arial'
        });
        canvas.add(text);
        canvas.setActiveObject(text);

        saveCanvasState();

        return text;
    }

    function addImage(left, top, url, options = {}) {
        fabric.Image.fromURL(url, function (img) {
            // Set image position
            img.set({
                left: left,
                top: top
            });

            // Apply additional options (if any)
            img.set(options);

            // Apply filters and re-render canvas when done
            img.applyFilters();

            // Add image onto canvas (it also re-renders the canvas)
            canvas.add(img);

            // Optionally, bring the image to the front
            canvas.bringToFront(img);

            canvas.renderAll();

            saveCanvasState();
        });
    }

    function addExternalImage(e, left, top) {
        if (e.originalEvent && e.originalEvent.dataTransfer) {
            const dataTransfer = e.originalEvent.dataTransfer;
            const items = dataTransfer.items;
            const files = dataTransfer.files;

            // Check for files first
            if (items) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].kind === 'file') {
                        const file = items[i].getAsFile();

                        if (file && isImageFile(file)) { // New helper function
                            const reader = new FileReader();

                            reader.onload = function (event) {
                                const newImageUrl = event.target.result;
                                addImage(left, top, newImageUrl);
                            };

                            reader.readAsDataURL(file);
                        }
                    }
                }
            }

            // Fallback for URLs (for Firefox)
            if (!items && files) {
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];

                    if (isImageFile(file)) { // New helper function
                        const reader = new FileReader();

                        reader.onload = function (event) {
                            const newImageUrl = event.target.result;
                            addImage(left, top, newImageUrl);
                        };

                        reader.readAsDataURL(file);
                    }
                }
            }

            // Handle string types for URLs
            if (items) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].kind === 'string' && items[i].type === 'text/uri-list') {
                        items[i].getAsString(function (url) {
                            //if (isImageUrl(url)) { // New helper function
                            addImage(left, top, url);
                            //}
                        });
                    }
                }
            }
        }
    }

    function isImageFile(file) {
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];
        const extension = file.name.split('.').pop().toLowerCase();
        const mimeType = file.type;

        return imageExtensions.includes(`.${extension}`) || mimeType.startsWith('image/');
    }


    $('.draggable').on('dragstart', function (e) {
        e.originalEvent.dataTransfer.setData('text/plain', $(this).attr('id'));
        $(this).css('cursor', 'grabbing');
    });

    $('.draggable').on('dragend', function (e) {
        $(this).css('cursor', 'grab');
    });

    $('#canvas-container').on('dragover', function (e) {
        e.preventDefault();
    });

    $('#canvas-container').on('drop', function (e) {
        e.preventDefault();
        const id = e.originalEvent.dataTransfer.getData('text');
        const rect = $(this).offset();
        const left = e.clientX - rect.left - 50;
        const top = e.clientY - rect.top - 50;

        if (id === 'rect') {
            addRectangle(left, top);
        } else if (id === 'circle') {
            addCircle(left, top);
        } else if (id === 'text') {
            addText(left, top);
        } else if (id === 'image') {
            let newImageUrl = './public/newImage.svg';
            addImage(left, top, newImageUrl);
        } else {
            addExternalImage(e, left, top);

        }

    });



    function getObjectCorners(obj) {
        const left = obj.left;
        const top = obj.top;
        const right = left + obj.width * obj.scaleX;
        const bottom = top + obj.height * obj.scaleY;

        return {
            topLeft: { x: left, y: top },
            topRight: { x: right, y: top },
            bottomLeft: { x: left, y: bottom },
            bottomRight: { x: right, y: bottom }
        };
    }

    function buildSpatialGrid(target) {
        let grid = { x: [], y: [] };
        canvas.getObjects().forEach(obj => {
            if (obj !== target) {
                const objCorners = getObjectCorners(obj);

                // each of the 4 corners
                for (const [_, objCorner] of Object.entries(objCorners)) {
                    grid.x.push(parseInt(objCorner.x));
                    grid.y.push(parseInt(objCorner.y));
                }
            }
        });
        grid.x = [...new Set(grid.x)];
        grid.y = [...new Set(grid.y)];
        grid.isInitialized = true;
        return grid;
    }

    // Function to snap object edges and show temporary lines
    function snapEdges(target) {
        if (spatialGrid.isInitialized) {
            const targetCorners = getObjectCorners(target);

            clearSnapLines();

            let isXMatchFound = false;
            let isYMatchFound = false;

            for (const [key, targetCorner] of Object.entries(targetCorners)) {
                // Snap to vertical edge
                if (!isXMatchFound) {
                    for (let i = 0; i <= snapDistance; i++) {
                        let leftX = parseInt(targetCorner.x) - i;
                        let rightX = parseInt(targetCorner.x) + i;

                        if (spatialGrid.x.indexOf(leftX) != -1) {
                            target.left = leftX - target.width * target.scaleX * (key.includes('Right') ? 1 : 0);
                            addSnapLine(leftX, 0, leftX, canvas.height);
                            isXMatchFound = true;
                            break;
                        }
                        else if (spatialGrid.x.indexOf(rightX) != -1) {
                            target.left = rightX - target.width * target.scaleX * (key.includes('Right') ? 1 : 0);
                            addSnapLine(rightX, 0, rightX, canvas.height);
                            isXMatchFound = true;
                            break;
                        }
                    }
                }

                // Snap to horizontal edge
                if (!isYMatchFound) {

                    for (let i = 0; i <= snapDistance; i++) {
                        let topY = parseInt(targetCorner.y) - i;
                        let botY = parseInt(targetCorner.y) + i;

                        if (spatialGrid.y.indexOf(topY) != -1) {
                            target.top = topY - target.height * target.scaleY * (key.includes('bottom') ? 1 : 0);
                            addSnapLine(0, topY, canvas.width, topY);
                            isYMatchFound = true;
                            break;

                        }
                        else if (spatialGrid.y.indexOf(botY) != -1) {
                            target.top = botY - target.height * target.scaleY * (key.includes('bottom') ? 1 : 0);
                            addSnapLine(0, botY, canvas.width, botY);
                            isYMatchFound = true;
                            break;
                        }
                    }
                }

            }
        }
    }

    // Function to add snap line across the whole canvas
    function addSnapLine(x1, y1, x2, y2) {
        const line = new fabric.Line([x1, y1, x2, y2], {
            stroke: '#ddddff',
            strokeWidth: 1,
            selectable: false,
            evented: false
        });
        canvas.add(line);
        snapLines.push(line);
    }

    // Function to clear all snap lines
    function clearSnapLines() {
        snapLines.forEach(line => canvas.remove(line));
        snapLines = [];
    }




    function updateShapeProperties(activeObject) {
        const bgColor = $('#edit-bg-color').val();
        const bgImageUrl = $('#edit-bg-image-url').val();

        activeObject.set({
            fill: bgColor
        });

        activeObject.set({
            fill: bgColor
        });
        canvas.renderAll();
    }

    function updateTextProperties(activeObject) {
        const fontSize = $('#edit-font-size').val();
        const fontFamily = $('#edit-font-family').val();
        const fontColor = $('#edit-font-color').val();
        //const textContent = $('#edit-text-content').val();

        activeObject.set({
            fontSize: parseInt(fontSize, 10),
            fontFamily: fontFamily,
            fill: fontColor,
            //text: textContent
        });
    }

    function updateImageProperties(activeObject) {
        const newUrl = $('#edit-image-url').val();
        let existingImage = activeObject;

        if (existingImage.getSrc().toLowerCase() != newUrl.toString().toLowerCase()) {
            fabric.Image.fromURL(newUrl, function (newImg) {
                newImg.set({
                    left: existingImage.left,
                    top: existingImage.top,
                    angle: existingImage.angle,
                    //scaleX: existingImage.scaleX,
                    //scaleY: existingImage.scaleY
                    //width: existingImage.width,
                });
                //newImg.setSrc(newUrl);
                canvas.add(newImg);

                canvas.bringToFront(newImg);
                canvas.remove(existingImage);
                canvas.renderAll();
            });
        }
    }


    function deleteSelectedObject() {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.remove(activeObject);
            canvas.discardActiveObject();
            canvas.renderAll();
            saveCanvasState();
            $('#property-update-box').hide();
        }
    }
    window.deleteSelectedObject = deleteSelectedObject;

    function moveActiveObject(direction) {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            switch (direction) {
                case 'ArrowUp':
                    activeObject.top -= 1;
                    break;
                case 'ArrowDown':
                    activeObject.top += 1;
                    break;
                case 'ArrowLeft':
                    activeObject.left -= 1;
                    break;
                case 'ArrowRight':
                    activeObject.left += 1;
                    break;
            }
            activeObject.setCoords(); // Update object's coordinates
            canvas.renderAll();
            saveCanvasState();
        }
    }




    canvas.on('object:modified', function () {
        saveCanvasState();
    });

    canvas.on('mouse:down', function (e) {
        setTimeout(() => {
            const activeObject = canvas.getActiveObject();
            if (activeObject) {
                spatialGrid = {};
                const rect = $('#canvas-container').offset();
                // const left = activeObject.left + activeObject.width + rect.left + 50;
                // const top = activeObject.top + rect.top - 40;

                let left = activeObject.left + parseInt(activeObject.width * (activeObject.zoomX || activeObject.scaleX || 1)) + rect.left + 20;
                let top = activeObject.top + rect.top - 73;

                const viewportWidth = $(window).width();
                const viewportHeight = $(window).height() - 80;
                const boxWidth = $('#property-update-box').outerWidth();
                const boxHeight = $('#property-update-box').outerHeight();

                // Adjust left value if it overflows the viewport
                if (left + boxWidth > viewportWidth) {
                    left = viewportWidth - boxWidth;
                }
                if (left < 0) {
                    left = 0;
                }

                // Adjust top value if it overflows the viewport
                if (top + boxHeight > viewportHeight) {
                    top = viewportHeight - boxHeight;
                }
                if (top < 0) {
                    top = 0;
                }

                $('#property-update-box').css({
                    left: `${left}px`,
                    top: `${top}px`
                }).show();

                $('#image-controls').hide();
                $('#text-controls').hide();
                $('#shape-controls').hide();


                if (activeObject.type === 'textbox') {
                    $('#text-controls').show();

                    //$('#edit-text-content').val(activeObject.text);
                    $('#edit-font-size').val(activeObject.fontSize);
                    $('#edit-font-family').val(activeObject.fontFamily);
                    $('#edit-font-color').val(activeObject.fill);
                }
                else if (activeObject.type === 'image') {
                    $('#image-controls').show();
                    let url = activeObject.getSrc() || '';

                    $('#edit-image-url').val(url);
                }
                else if (activeObject.type === 'rect' || activeObject.type === 'circle') {
                    $('#shape-controls').show();
                    $('#edit-bg-color').val(activeObject.fill);
                }
            } else {
                $('#property-update-box').hide();
            }
        }, 100);

    });

    canvas.on('object:moving', function (e) {
        $('#property-update-box').hide();



        const target = e.target;

        if (!spatialGrid.isInitialized) {
            spatialGrid = buildSpatialGrid(target);
        }

        snapEdges(target);
        target.setCoords(); // Update object's coordinates
    });

    canvas.on('mouse:up', function () {
        clearSnapLines();
    });


    function updateCurrentObjectProperties() {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
            if (activeObject.type === 'textbox') {
                updateTextProperties(activeObject);
            }
            else if (activeObject.type === 'image') {
                updateImageProperties(activeObject);
            }
            else if (activeObject.type === 'rect' || activeObject.type === 'circle') {
                updateShapeProperties(activeObject);
            }

            canvas.renderAll();
            $('#property-update-box').hide();

            setTimeout(() => {
                saveCanvasState();
            }, 500);
        }

    }

    //$('.input_object_Property').on('blur', updateCurrentObjectProperties);

    // Confirm Item Property Change
    $('#btn-update-properties').on('click', function () {
        updateCurrentObjectProperties();
    });


    // Attach click event listeners to buttons
    // document.getElementById('savePdfBtn').addEventListener('click', saveToPDF);
    // document.getElementById('saveJpegBtn').addEventListener('click', saveToJPEG);
    // document.getElementById('savePngBtn').addEventListener('click', saveToPNG);

    // document.getElementById('undoBtn').addEventListener('click', undo);
    // document.getElementById('redoBtn').addEventListener('click', redo);

    // Ctrl+Z for Undo, Ctrl+Y for Redo
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.key === 'z') {
            undo();
        }
        else if (e.ctrlKey && e.key === 'y') {
            redo();
        }
        else if (e.key === 'Delete' || e.key === 'Backspace') {
            deleteSelectedObject();
        }
        else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            moveActiveObject(e.key);
        }
    });




    // for (let i = 0; i < 500; i++) {
    //     canvas.add(new fabric.Rect({
    //         left: 100 + i,
    //         top: 100 + i,
    //         fill: 'red',
    //         width: 200,
    //         height: 70
    //     }));
    // }

    //canvas.renderAll();


    function undo() {
        if (undoStack.length > 1 && !isUndoingOrRedoing) {
            isUndoingOrRedoing = true;
            redoStack.push(undoStack.pop());
            var json = undoStack[undoStack.length - 1];
            canvas.loadFromJSON(json, function () {
                canvas.renderAll();
                isUndoingOrRedoing = false;
            });

            $('#property-update-box').hide();
        }
    }
    window.undo = undo;

    function redo() {
        if (redoStack.length > 0 && !isUndoingOrRedoing) {
            isUndoingOrRedoing = true;
            var json = redoStack.pop();
            undoStack.push(json);
            canvas.loadFromJSON(json, function () {
                canvas.renderAll();
                isUndoingOrRedoing = false;
            });

            $('#property-update-box').hide();
        }
    }
    window.redo = redo;


    // Function to save canvas to PDF
    function saveToPDF() {
        const canvasWidthPt = (canvas.width * 72) / 96;
        const canvasHeightPt = (canvas.height * 72) / 96;
        window.jsPDF = window.jspdf.jsPDF
        const pdf = new jsPDF({
            orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
            unit: 'pt',  // Points
            format: [canvasWidthPt, canvasHeightPt] // Custom format
        });

        const dataURL = canvas.toDataURL('image/jpeg', 1.0);


        pdf.addImage(dataURL, 'JPEG', 0, 0, canvasWidthPt, canvasHeightPt);
        pdf.save('collection.pdf');
    }
    window.saveToPDF = saveToPDF;

    // Function to save canvas to JPEG
    function saveToJPEG() {
        var jpegDataURL = canvas.toDataURL({ format: 'jpeg', quality: 0.8 });
        var downloadLink = document.createElement('a');
        downloadLink.href = jpegDataURL;
        downloadLink.download = 'collection.jpeg';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
    window.saveToJPEG = saveToJPEG;

    // Function to save canvas to PNG
    function saveToPNG() {
        var pngDataURL = canvas.toDataURL({ format: 'png', quality: 1.0 });
        var downloadLink = document.createElement('a');
        downloadLink.href = pngDataURL;
        downloadLink.download = 'collection.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
    window.saveToPNG = saveToPNG;
});



