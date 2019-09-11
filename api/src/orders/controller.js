const Order = require('./models/Order');

const create = async (req, res) => {
    try {
        const order = await Order.create(req.body); 
        return res.status(200).json({
            message: "Order created",
            order
        });
    } catch (err) {
        return res.status(400).json({
            error: "Order creation failed!"
        });
    }
}

const read = async (req, res) => {
    try {
    const id = req.params.id;
    const order = await Order.findOne({orderId: id});
    if (order) {
        return res.status(200).json({
            order
        });
    } else {
        return res.status(404).json({
            error: "Order not found"
        });
    }
    } catch (err) {
        return res.status(400).json({
            error: "Can't read order"
        });
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        await Order.update({orderId: id}, req.body);
        return res.status(200).json({
            message: "Order updated"
        });
    } catch (err) {
        return res.status(400).json({
            error: "Order update failed"
        });
    }
}

const del = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await Order.findOne({orderId: id});
        if (order) {
            await Order.deleteOne({orderId: id});
            return res.status(200).json({
                message: "Order deleted"
            });
        } else {
            return res.status(404).json({
                error: "Order not found"
            });
        }
    } catch (err) {
        return res.status(400).json({
            error: "Order deleted failed"
        });
    }
}

const list = async (req, res) => {
    try {
        console.log(req.query);
        const pageNum = parseInt(req.query.page_num, 10) || 1;
        const pageSize = parseInt(req.query.page_size, 10) || 5;
        const skips = pageSize * (pageNum - 1);
        const orders = await Order.find({}).skip(skips).limit(pageSize);
        if (orders) {
            return res.status(200).json({
                orders
            });
        } else {
            return res.status(404).json({
                error: "Orders not found"
            });
        }
    } catch (err) {
        return res.status(400).json({
            error: "Can't list orders"
        });
    }
}

const controller = {
    create,
    read,
    update,
    del,
    list
};

module.exports = controller;