// memory management unit 
// (перевіряє P і встановлює R і M при звертанні до пам'яті)

class MemoryManagementUnit{

    constructor(config){

        if(!config.phisicalPage)
            throw new Error("pageTable param is required");

        this.phisicalPage = config.phisicalPage;

    }
    
}

module.exports = MemoryManagementUnit;