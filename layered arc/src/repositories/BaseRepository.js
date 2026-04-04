class BaseRepository {
    constructor(model) {
        this.model = model;
    }
     async findAll(filter ={}, options ={}){
         const {sort , limit, skip ,populate, select} = options;
        let query = this.model.find(filter);

     
      if (select) query = query.select(select);
       if (sort) query = query.sort(sort);
        if (skip) query = query.skip(skip);
        if (limit) query = query.limit(limit);
        if (populate) query = query.populate(populate);
        return await query.exec();
    }   
     async findById(id, options ={}) {
        const {populate, select} = options;
        let query = this.model.findById(id);
        if (select) query = query.select(select);
        if (populate) query = query.populate(populate);
        return await query.exec();
    }
     async asyncfindOne(filter, options ={}) {
        const {populate, select} = options;
        let query = this.model.findOne(filter);
        if (select) query = query.select(select);
        if (populate) query = query.populate(populate);
        return await query.exec();
    }
        async create(data) {
        const document = new this.model(data);
        return await document.save();
    }
    async updateById(id, data, options ={}) {
        const {new: returnNewDocument = true, populate, select} = options;
        let query = this.model.findByIdAndUpdate(id, data, {new: returnNewDocument});
        if (select) query = query.select(select);
        if (populate) query = query.populate(populate);
        return await query.exec();
    }
     async deleteById(id) {
        return await this.model.findByIdAndDelete(id).exec();
    }       
}