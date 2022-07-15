import Contact from '../models/contact.model.js';

var list = async (req, res) => {
    try{
        const contactList = await Contact.find({owner_user_id: req.loginuser.id});
        res.json(contactList);
    } catch(err){
        res.status(400).send({message: err.message})
    }
}

var add = async (req,res) => {
    const contact = new Contact({
        name: req.body.name,
        mobile: req.body.mobile,
        email_id: req.body.email_id,
        owner_user_id: req.loginuser.id
    })
    try {
        const a1 = await contact.save()
        res.json(a1)
    } catch(err) {
        res.status(400).send({message: err.message})
    }
}

var find = async (req,res) =>{
    try{
        const contact=await Contact.findOne({ _id: req.params.id, owner_user_id: req.loginuser.id });
        res.json(contact);
    }
    catch(err){
        res.status(400).send({message: err.message})
    }
} 

var deleteone = async (req,res) => {
    try{
        res.json(await Contact.deleteOne({ _id: req.params.id, owner_user_id: req.loginuser.id }));
    }
    catch(err){
        res.status(400).send({message: err.message})
    }
}

var update = async (req,res) => {
    try{
        const r1=await Contact.updateOne({ _id: req.params.id, owner_user_id: req.loginuser.id }, {
            name: req.body.name,
            mobile: req.body.mobile,
            email_id: req.body.email_id
        });
        res.json(r1);
    }
    catch(err){
        res.status(400).send({message: err.message})
    }
}
export default { list, add ,find , deleteone, update};