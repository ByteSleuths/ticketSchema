class Ticket {
  constructor(guildId, categoryId, creatorId, text) {
    this.guildId = guildId;
    this.categoryId = categoryId;
    this.creatorId = creatorId;
    this.text = text;
  }

}

module.exports = Ticket;
