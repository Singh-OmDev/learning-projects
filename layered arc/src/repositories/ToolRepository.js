const BaseRepository = require('./BaseRepository');
const Tool = require('../models/Tools');

class ToolRepository extends BaseRepository {
    constructor() {
        super(Tool);
    }

    async findByName(name) {
        return await this.model.findOne({ name }).exec();
    }

    async findByCategory(category) {
        return await this.model.find({ category }).exec();
    }

    async findPopular() {
        return await this.model.find({ isPopular: true }).exec();
    }

    async search(searchQuery) {
        return await this.model.find({
            $or: [
                { name: { $regex: searchQuery, $options: 'i' } },
                { description: { $regex: searchQuery, $options: 'i' } },
                { category: { $regex: searchQuery, $options: 'i' } },
                { tags: { $regex: searchQuery, $options: 'i' } }
            ]
        }).exec();
    }
}

module.exports = ToolRepository;