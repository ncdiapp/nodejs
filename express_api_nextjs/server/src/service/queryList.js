export const query_getProfiles = `
    SELECT 
    kiosk_profiles_1.*, 
    cemeteries_top100.name as cemeteryname,
    t_honorsdisplay.honorsdisplay, 
    t_servicebranchesdisplay.servicebranchesdisplay, 
    t_warperiodsdisplay.warperiodsdisplay,
    min_begin_date,
    max_end_date
FROM  
    kiosk_profiles_1
LEFT JOIN cemeteries_top100 on cemeteries_top100.cemetery_id = kiosk_profiles_1.cemetery_num
LEFT JOIN 
    (SELECT 
        kiosk_profilehonor.decedent_id, 
        GROUP_CONCAT(kiosk_honor.descr ORDER BY kiosk_honor.descr SEPARATOR ', ') AS honorsdisplay
    FROM 
        kiosk_honor
    INNER JOIN 
        kiosk_profilehonor 
        ON kiosk_honor.honor_cd = kiosk_profilehonor.honor_cd
    GROUP BY 
        kiosk_profilehonor.decedent_id) as t_honorsdisplay 
    ON kiosk_profiles_1.decedent_id = t_honorsdisplay.decedent_id
LEFT JOIN 
    (SELECT 
        kiosk_profileservicebranch.decedent_id, 
        GROUP_CONCAT(kiosk_servicebranch.description ORDER BY kiosk_servicebranch.description SEPARATOR ', ') AS servicebranchesdisplay,
        MIN(kiosk_profileservicebranch.begin_date) AS min_begin_date,
        MAX(kiosk_profileservicebranch.end_date) AS max_end_date
    FROM 
        kiosk_servicebranch
    INNER JOIN 
        kiosk_profileservicebranch 
        ON kiosk_servicebranch.service_branch_id = kiosk_profileservicebranch.service_branch_id
    GROUP BY 
        kiosk_profileservicebranch.decedent_id) as t_servicebranchesdisplay 
    ON kiosk_profiles_1.decedent_id = t_servicebranchesdisplay.decedent_id	
LEFT JOIN 
    (SELECT 
        kiosk_profilewarperiods.decedent_id, 
        GROUP_CONCAT(kiosk_warperiods.description ORDER BY kiosk_warperiods.description SEPARATOR ', ') AS warperiodsdisplay
    FROM 
        kiosk_warperiods
    INNER JOIN 
        kiosk_profilewarperiods 
        ON kiosk_warperiods.war_period_id = kiosk_profilewarperiods.war_period_id
    GROUP BY 
        kiosk_profilewarperiods.decedent_id) as t_warperiodsdisplay 
    ON kiosk_profiles_1.decedent_id = t_warperiodsdisplay.decedent_id
    `;
