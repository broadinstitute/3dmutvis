import {observable, computed, action} from "mobx";

// central store for fetching and storing analyze view relevant Data

export default class AnalyzeStore {
    @observable uniprot: '';    
    @observable sequence: '';    

    initializeDummyData() {
        this
    }

    @action.bound
    addEntity(newEntity:string) {
        // TODO also allow different upper/lowercase
        if( this.autoCompleteDictionary.indexOf(newEntity) === -1 ) {
            throw new Error(`Term ${newEntity} is not available.`);
        }
        this.entities.push({name:newEntity});
    }
    @action.bound
    removeEntity(removeEntity:string) {
        const entityNames = this.entities.map( ({name}) => name );
        this.entities.splice( entityNames.indexOf(removeEntity), 1 );
    }

    @computed
    get autoCompleteDictionary() {
        const entityNames = this.entities.map( ({name}) => name );
        const filtered = this.dictionary.filter( name => entityNames.indexOf(name) === -1 );
        return filtered;
    }

}