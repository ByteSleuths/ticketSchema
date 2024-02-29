class Ticket {
    constructor(guildId, categoryId, creatorId, text) {
        // Initialiser les propriétés de la classe
        this.guildId = guildId;
        this.categoryId = categoryId;
        this.creatorId = creatorId;
        this.text = text;
    }

}

module.exports = Ticket;
