export const Facilities = (facilityObject) => {
    return `
    
    <div class="facilityTag">
        <div class="facilityName">${facilityObject.facilityName}</div>
        <div class="securityLevel">Security Level: ${facilityObject.securityLevel}</div>
        <div class="capacity">Capacity: ${facilityObject.capacity}</div>

    </div>
    
    
    `
}


