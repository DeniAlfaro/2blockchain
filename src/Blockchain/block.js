class Block {
    constructor(timespan, previousHash, hash, data) {
        this.timespan = timespan;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
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