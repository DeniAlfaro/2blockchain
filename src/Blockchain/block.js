class Block {
    constructor(timespan, previousHash, hash, data) {
        this.timespan = timespan;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
    }

    static get genesis() {
        const timestamp = (new Date(2019,0,1)).getTime();
        return new this(timestamp, undefined, 'g3n3sis-h4sh', 'g3n3sis-d4t4');
    }

    toString(){
        const {
            timespan, previousHash, hash, data
        } = this;
        return `Block -
        timespan     : ${timespan}
        previoushash : ${previousHash}
        hash         : ${hash}
        data         : ${data}
        `;
    }
}

export default Block;