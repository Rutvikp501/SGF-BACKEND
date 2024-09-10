//     console.log(params);
//     let params={
//   "consultant": "66d53dbcc2b97c685044086b",
//   "name": "testing1",
//   "email": "testing1@gmail",
//   "phone": "12121212",
//   "pincode": "421102",
//   "eventSpecialsName": "",
//   "specialCode": "",
//   "leadType": "Regular",
//   "status": "Pending",
//   "events": [
//     {
//       "name": "testing",
//       "date": "2024-09-06",
//       "timing": "10AM - 10PM",
//       "location": "kalyan",
//     }
//   ],
//   "package": {
//     "packageName": "silver",
//     "subname": "string",
//     "addOns": "string",
//     "amount": 12000
//   },
//   "cycle": 0,
//   "conversionDate": "2024-09-06"
// }


let data = {
    UF_CRM_1725626932463: "",//consultant_code
    UF_CRM_1725958005830: "",//consultant_mobile_no
    UF_CRM_1725957892961: "",//consultant_email_id
    name: "",//event name
    email: "",//email
    phone: "",//phone
    UF_CRM_1723871068885: "",//event_location
    UF_CRM_1725958658829: "",//lead_id
    UF_CRM_1723870992344: "",// Date of issue
    UF_CRM_1723871015696: "",// Booking Name  
    UF_CRM_1723871636157: "",// Date and time of event 
    UF_CRM_1724929500047: "",// Event Type 
    UF_CRM_1725627014795: "",// eventDate 
    UF_CRM_1725627051950: "",//eventSpecialsName 
    UF_CRM_1725627132023: "",//specialCode
    UF_CRM_1725961934686: "",// Package amount
    UF_CRM_1724912903: "",//service Package 
    
    SOURCE_ID: "",// Source
    UF_CRM_1723871299165: "",// Groom Name 
    UF_CRM_1723871321106: "",// Bride Name
    UF_CRM_1724754601811: "",// Home Address
}
const requestBody = {
    'fields[NAME]': LeadData.name || '',
    'fields[PHONE][0][VALUE]': LeadData.phone || '',
    'fields[PHONE][0][VALUE_TYPE]': 'WORK',
    'fields[EMAIL][0][VALUE]': LeadData.email || '',
    'fields[EMAIL][0][VALUE_TYPE]': 'WORK',
    'fields[UF_CRM_1725626932463]': LeadData.consultant_code || '',
    'fields[UF_CRM_1725958005830]': LeadData.consultant_mobile_no || '',
    'fields[UF_CRM_1725957892961]': LeadData.consultant_email_id || '',
    'fields[UF_CRM_1723871068885]': LeadData.events[0]?.location || 'Not specified',
    'fields[UF_CRM_1723871636157]': LeadData.events[0]?.date || 'Not specified',
    'fields[UF_CRM_1725627014795]': LeadData.events[0]?.date || 'Not specified',
    'fields[UF_CRM_1725958658829]': LeadData.lead_id || '',
    'fields[UF_CRM_1723871015696]': LeadData.booking_name || '',
    'fields[UF_CRM_1724929500047]': LeadData.leadType || '',
    'fields[UF_CRM_1725627051950]': LeadData.eventSpecialsName || '',
    'fields[UF_CRM_1725627132023]': LeadData.specialCode || '',
    'fields[UF_CRM_1724912903]': LeadData.package.name || 'NA',
    // 'fields[UF_CRM_1723870992344]': LeadData.date_of_issue || '',
    'fields[UF_CRM_1725961934686]': LeadData.package.amount || ''
};