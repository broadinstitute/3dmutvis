import {observable, computed, action} from "mobx";


export type Gene = {
    symbol: string,
    name: string,
    synonyms: string
}

export default class SearchStore {
    @observable genes: Array<Gene> = [];

    initializeDummyData() {
        this.genes = [
            {
                symbol: "BRD4",
                name: "bromo-domain 4 containing protein",
                synonyms: 'HUNK'
            },
            {
                symbol: "KRAS",
                name: "bla",
                synonyms: 'SOS1'
            }
        ];
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