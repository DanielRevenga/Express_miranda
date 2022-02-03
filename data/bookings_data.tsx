const bookings_data =[{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"1/10/2022","check_out":"7/21/2022","status":"check in","special_request":"Revision of Drainage Device in Scrotum & Tunica, Via Opening"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"12/12/2020","check_out":"1/16/2022","status":"check out","special_request":"Suture Removal from Upper Extremity"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"10/30/2021","check_out":"3/16/2021","status":"check in","special_request":"Bypass L Ext Iliac Art to L Femor A w Nonaut Sub, Perc Endo"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"11/25/2020","check_out":"4/1/2021","status":"check out","special_request":"Aural Rehab Status Assess w Acoust Immit/Reflex Equip"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"2/23/2021","check_out":"9/25/2022","status":"in progress","special_request":"Coordination/Dexterity Treatment of Neuro Head, Neck"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"1/5/2021","check_out":"10/25/2021","status":"in progress","special_request":"CT Scan of Abd & Pelvis using L Osm Contrast"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"3/24/2021","check_out":"6/17/2021","status":"check out","special_request":"Supplement Right Iris with Nonaut Sub, Open Approach"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"10/29/2021","check_out":"7/24/2021","status":"check out","special_request":"Removal of Splint on Right Upper Leg"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"10/9/2021","check_out":"3/26/2021","status":"check out","special_request":"Stereotactic Particulate Radiosurgery of Prostate"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"8/27/2021","check_out":"9/11/2021","status":"check out","special_request":"Resection of Left Large Intestine, Endo"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"4/25/2021","check_out":"3/5/2021","status":"check out","special_request":"Remove Autol Sub from Up Extrem Subcu/Fascia, Perc"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"12/19/2020","check_out":"5/23/2021","status":"check out","special_request":"Restriction of Left Internal Mammary Artery, Open Approach"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"5/27/2021","check_out":"3/23/2021","status":"check out","special_request":"Bypass L Fem Art to Post Tib Art w Autol Art, Open 1483"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"2/24/2021","check_out":"8/8/2021","status":"check out","special_request":"Removal of Int Fix from L Tarsal Jt, Perc Approach"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"4/17/2021","check_out":"1/9/2021","status":"check out","special_request":"Removal of Drainage Device from Left Lung, Via Opening"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"12/4/2020","check_out":"11/20/2021","status":"check out","special_request":"Dilation of R Int Carotid, Perc Endo Approach"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"3/14/2021","check_out":"3/28/2021","status":"check out","special_request":"Transfer Acoustic Nerve to Vagus Nerve, Perc Endo Approach"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"12/22/2020","check_out":"4/14/2021","status":"check out","special_request":"Bypass Jejunum to Jejunum with Synthetic Substitute, Endo"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"5/26/2021","check_out":"2/3/2021","status":"check out","special_request":"Release Aortic Body, Open Approach"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"8/13/2021","check_out":"7/27/2021","status":"check out","special_request":"Insertion of Stim Lead into Low Muscle, Perc Endo Approach"},
{"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"2/10/2021","check_out":"11/29/2020","status":"check out","special_request":"Supplement Left Wrist Joint with Nonaut Sub, Open Approach"}
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"12/15/2020","check_out":"7/28/2021","status":"check out","special_request":"Excision of Mesentery, Perc Endo Approach, Diagn"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"6/9/2021","check_out":"12/22/2020","status":"check out","special_request":"Dilate Innom Art, Bifurc, w 4+ Intralum Dev, Perc"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"10/2/2021","check_out":"7/14/2021","status":"check out","special_request":"Supplement Esophageal Vein with Autol Sub, Open Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"9/8/2021","check_out":"2/26/2021","status":"check out","special_request":"Bypass R Int Iliac Art to B Int Ilia w Autol Vn, Perc Endo"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"10/9/2021","check_out":"5/2/2021","status":"check out","special_request":"Restrict of Esophagast Junct with Intralum Dev, Via Opening"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"10/7/2021","check_out":"10/4/2021","status":"check out","special_request":"Excision of L Wrist Bursa/Lig, Perc Approach, Diagn"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"6/9/2021","check_out":"7/20/2021","status":"check out","special_request":"Supplement L Up Leg Subcu/Fascia w Autol Sub, Perc"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"8/22/2021","check_out":"12/1/2020","status":"check out","special_request":"Plain Radiography of Intercos/Bronc A using L Osm Contrast"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"7/4/2021","check_out":"10/30/2021","status":"check out","special_request":"Bypass R Atrium to L Pulm Art with Autol Art, Open Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"6/9/2021","check_out":"12/27/2020","status":"check out","special_request":"Bypass Inf Vena Cava to Sup Mesent V w Nonaut Sub, Perc Endo"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"8/29/2021","check_out":"6/5/2021","status":"check out","special_request":"Reattachment of Liver, Percutaneous Endoscopic Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"1/18/2021","check_out":"2/25/2021","status":"check out","special_request":"Lower Veins, Insertion"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"12/11/2020","check_out":"4/14/2021","status":"check out","special_request":"Revision of Nonaut Sub in Mesentery, Open Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"9/2/2021","check_out":"12/6/2020","status":"check out","special_request":"Introduction of Anti-inflammatory into Up GI, Perc Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"6/28/2021","check_out":"9/28/2021","status":"check out","special_request":"Release Bilateral Seminal Vesicles, Open Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"1/2/2021","check_out":"1/8/2021","status":"check out","special_request":"Release Right Lower Femur, Open Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"8/29/2021","check_out":"9/5/2021","status":"check out","special_request":"Reattachment of R Thorax Bursa/Lig, Open Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"7/5/2021","check_out":"10/30/2021","status":"check out","special_request":"Excision of Lower Artery, Percutaneous Endoscopic Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"5/12/2021","check_out":"5/8/2021","status":"check out","special_request":"Release Carina, Percutaneous Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"6/9/2021","check_out":"12/7/2020","status":"check out","special_request":"Removal of Other Device from Retroperitoneum, Perc Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"6/23/2021","check_out":"4/5/2021","status":"check out","special_request":"Inspection of Right Lower Leg, Percutaneous Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"11/29/2020","check_out":"11/28/2020","status":"check out","special_request":"Drainage of R Int Iliac Art with Drain Dev, Open Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"6/20/2021","check_out":"9/8/2021","status":"check out","special_request":"Insertion of Facet Stabl Dev into Lumsac Jt, Perc Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"2/4/2021","check_out":"3/27/2021","status":"check out","special_request":"Repair Larynx, Percutaneous Endoscopic Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"11/15/2021","check_out":"3/18/2021","status":"check out","special_request":"Stereotactic Gamma Beam Radiosurgery of Ovary"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"11/6/2021","check_out":"7/29/2021","status":"check out","special_request":"Dilate L Int Mamm Art w 4 Drug-elut, Perc Endo"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"8/25/2021","check_out":"8/28/2021","status":"check out","special_request":"Occlusion of Cystic Duct with Intraluminal Device, Endo"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"10/20/2021","check_out":"6/1/2021","status":"check out","special_request":"Fusion of R Acromioclav Jt with Autol Sub, Perc Approach"},
// {"user_id":"61fb030c17cd23532051752c","room_id":"6","check_in":"11/3/2021","check_out":"5/24/2021","status":"check out","special_request":"Restriction of Left Femoral Artery, Percutaneous Approach"}
]

module.exports = bookings_data;