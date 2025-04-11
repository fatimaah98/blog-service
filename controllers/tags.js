const { create, findAll, remove } = require("../repositories/tags");

exports.create = async(req, res, next) => {
    try {
        const {title} = req.body;
        const createdTag = await create(title);
        return res.status(201).json({message: 'tag created', tag: createdTag})
    } catch (error) {
        return res.status(500).json({message: 'error 500 in add new tag', error})
    }
}

exports.getAll = async(req, res, next) => {
    try {
        const tags = await findAll()
        return res.status(200).json(tags);
    } catch (error) {
        return res.status(500).json({message: 'error 500 in get all tags', error})
    }
}

exports.deleteTag = async(req, res, next) => {
    try {
        const {id} = req.params;   
        const removedTag = await remove(id);
        return res.status(200).json({message: "tag removed successfully"}); 
    } 
    catch (error) {
        return res.status(500).json({message: 'error 500 in remove tags', error})
    }
}