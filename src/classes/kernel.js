// (відповідає за сторінкові промахи і алгоритм заміни сторінок)

class Kernel{

    constructor(config){

        if(!config.pageTable)
            throw new Error("pageTable param is required");

        if(!config.managementMemoryUnit)
            throw new Error("physicalPage param is required");    
         
        this.pageTable = config.pageTable;
        this.managementMemoryUnit = config.managementMemoryUnit;
        this.virtualPages = new Map(); // Map of the Arrays

    }

    createVirtualAddressSpace(processId){

        if(this.virtualPages.has(processId))
            throw new Error("There is process in kernel with such id");

        this.virtualPages.set(processId)
            
    }

    deleteVirtualAddressSpace(processId){

        if(!this.virtualPages.has(processId))
            throw new Error("There is NO process in kernel with such id");

        this.virtualPages.delete(processId);    

    }

    setPage(processId, value){
        
        if(!this.virtualPages.has(processId)){
            this.virtualPages.set([]);
        }

        

        // TODO return virtual page id

    }

}

module.exports = Kernel;