import {observable, computed, action} from "mobx";


export type Entity = {
    name: string,
    hit: string,
    score: number
}

export default class ApplicationStore {
    @observable entities: Array<Entity> = [];
    dictionary: Array<string> = [];

    title ="";
    placeholder="";


    initializeDummyData() {
        this.entities = [
            {
                name: "BRD4",
                hit: "bla BRD4",
                score: 1.0
            },
            {
                name: "KRAS",
                hit: "bla KRAS",
                score: 0.8
            }
        ];
        this.dictionary = ["BRD4", "KRAS", "BRCA", "ERB2"];
        this.title = "Gene";
        this.placeholder = "HGNC symbol";
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