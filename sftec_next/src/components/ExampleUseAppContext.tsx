"use client";
import { useAppContext } from "@/contexts/AppContextProvider";

const ExampleUseAppContext = () => {
    const appContext = useAppContext();
    return (
        <div>
            Current Time: {appContext.currentTime}
        </div>
    )
}

export default ExampleUseAppContext;