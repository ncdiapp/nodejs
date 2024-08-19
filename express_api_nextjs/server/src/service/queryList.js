export const query_getProfiles = `
    SELECT 
    profiles.*, 
    cemeteries.name as cemeteryname,
    t_honorsdisplay.honorsdisplay, 
    t_servicebranchesdisplay.servicebranchesdisplay, 
    t_warperiodsdisplay.warperiodsdisplay,
    min_begin_date,
    max_end_date
FROM  
    profiles
LEFT JOIN cemeteries on cemeteries.cemetery_id = profiles.cemetery_num
LEFT JOIN 
    (SELECT 
        profilehonor.decedent_id, 
        GROUP_CONCAT(honor.descr ORDER BY honor.descr SEPARATOR ', ') AS honorsdisplay
    FROM 
        honor
    INNER JOIN 
        profilehonor 
        ON honor.honor_cd = profilehonor.honor_cd
    GROUP BY 
        profilehonor.decedent_id) as t_honorsdisplay 
    ON profiles.decedent_id = t_honorsdisplay.decedent_id
LEFT JOIN 
    (SELECT 
        profileservicebranch.decedent_id, 
        GROUP_CONCAT(servicebranch.description ORDER BY servicebranch.description SEPARATOR ', ') AS servicebranchesdisplay,
        MIN(profileservicebranch.begin_date) AS min_begin_date,
        MAX(profileservicebranch.end_date) AS max_end_date
    FROM 
        servicebranch
    INNER JOIN 
        profileservicebranch 
        ON servicebranch.service_branch_id = profileservicebranch.service_branch_id
    GROUP BY 
        profileservicebranch.decedent_id) as t_servicebranchesdisplay 
    ON profiles.decedent_id = t_servicebranchesdisplay.decedent_id	
LEFT JOIN 
    (SELECT 
        profilewarperiods.decedent_id, 
        GROUP_CONCAT(warperiods.description ORDER BY warperiods.description SEPARATOR ', ') AS warperiodsdisplay
    FROM 
        warperiods
    INNER JOIN 
        profilewarperiods 
        ON warperiods.war_period_id = profilewarperiods.war_period_id
    GROUP BY 
        profilewarperiods.decedent_id) as t_warperiodsdisplay 
    ON profiles.decedent_id = t_warperiodsdisplay.decedent_id
    `;
