export const Criminal = (criminalObject) => {
    return `
    <div class="criminalTag">
    <h3 class="name">${criminalObject.name}<br></h3>
    
    <div class="age">Age: ${criminalObject.age}</div>
    <div class="crime">Crime: ${criminalObject.conviction}</div>
    <div class="tStart">Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
    <div class="tEnd">Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
</div>
    
    `
}