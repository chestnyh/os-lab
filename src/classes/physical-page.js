// (фіз. сторінка)

class PhysicalPage{
    
    constructor(config){
        
        if(!config.size)
            throw new Error("size param is required");

        this.maxSize = config.size;
        this.physicalPages = [];
    }

    set(value){

        if(this.physicalPages.length > this.maxSize)
            throw new Error("No free pages in physical memory");
        
        return (this.physicalPages.push(value) - 1) 

    }

    get(page){

        if(typeof this.physicalPages[page] === "undefined")
            throw new Error("No phisical page");

        return this.physicalPages[page];

    }
    
}

module.exports = PhysicalPage;