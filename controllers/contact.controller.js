import Contact from '../models/contact.model.js';

var list = async (req, res) => {
    try{
        const contact = await Contact.find();
        res.json(contact);
    } catch(err){
        res.send('error'+err)
    }
}

var add = async (req,res) => {
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

var find = async (req,res) =>{
    try{
        const contact=await Contact.findById(req.params.id);
        res.json(contact);
    }
    catch(err){
        res.send('error'+err)
    }
} 

var deleteone = async (req,res) => {
    try{
        //const contact=await Contact.findById(req.params.id);
        //await contact.delete();
        res.json(await Contact.deleteOne({ _id: req.params.id }));
    }
    catch(err){
        res.send("error");
    }

}

var update = async (req,res) => {
    try{
        const r1=await Contact.updateOne({ _id: req.params.id }, {
            name: req.body.name,
            mobile: req.body.mobile,
            email_id: req.body.email_id
        });
        res.json(r1);
    }
    catch(err){
        res.send("error");
    }
}
export default { list, add ,find ,deleteone,update};