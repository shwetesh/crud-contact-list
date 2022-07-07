import Contact from '../models/contact.model.js';

async function list(req, res) {
    try{
        const contact = await Contact.find();
        res.json(contact);
    } catch(err){
        res.send('error'+err)
    }
}

async function add(req,res) {
    const contact = new Contact({
        name: req.body.name,
        mobile: req.body.mobile,
        email_id: req.body.email_id
    })
    try {
        const a1 = await contact.save()
        res.json(a1)
    } catch(err) {
        res.send("Error")
    }
}


export default {
    list, add
};