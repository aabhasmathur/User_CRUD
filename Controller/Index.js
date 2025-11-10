const user_model = require('../Model/Index')


async function getuserbyId(req, res) {

        const id = req.params.id;
        const x = await user_model.findById(id);
        res.json(x);


}

async function updateuserbyId(req, res) {
        const id = req.params.id;
        try {
                const updated = await user_model.findByIdAndUpdate(id, req.body, { new: true });
                if (!updated) return res.status(404).send('User not found');
                res.json(updated);
        } catch (err) {
                console.error(err);
                res.status(500).send('Failed to update user');
        }
}


async function deleteuserbyId(req, res) {
        await user_model.deleteOne({ _id: req.params.id });
        res.end("deleted");
}


async function addentry(req, res) {

        try {
                const user = await user_model.create({
                        name: req.body.name,
                        id: req.body.id,
                        region: req.body.region,
                        Segment: req.body.segment || req.body.Segment
                })
                console.log(user);
                res.status(201).json(user);
        } catch (err) {
                console.error(err);
                res.status(500).send('Failed to create user');
        }
}


async function getallusers(req, res) {
        const x = await user_model.find({});

        console.log(x);

        res.json(x);
}





module.exports = { getuserbyId, updateuserbyId, deleteuserbyId, addentry, getallusers };