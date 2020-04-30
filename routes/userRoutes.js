const express = require('express')
const router = express.Router();
const SalesPerson = require('../models/salesModel')
const Customer = require('../models/customerModel')
const path = require('path')
const bcrypt = require('bcryptjs')


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'adminLogin.html'));
})

router.get('/salesPersonReg', (req, res) => {
    res.sendFile(path.join(__dirname,'../views', '/salesPersonReg.html'))
})
router.get('/salesLogin', (req, res) => {
    res.sendFile(path.join(__dirname,'../views', '/salesLogin.html'))
}) 
router.get('/customerReg', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '/customerReg.html'))
})

//CUSTOMER ROUTES
router.post("/saveCustomer", async(req, res) => {
    try {
        var myData = new Customer(req.body);
        await myData.save()
        console.log(myData)
        console.log('Item has been saved')
        res.redirect('/customerList')

    } catch (error) {
        res.status(400).send('Unable to save to database')

    }
                                                          
});

router.get("/customerList", async(req, res) => {                                                              
    try {
        let items = await Customer.find()
        res.render('display-customers', { customers: items })
    } catch (err) {
        res.status(400).send("Unable to find items in the database")
    }
});

//SALES PERSON ROUTES
router.post("/saveSalesPerson", (req, res) => {
    try {
        var myData = new SalesPerson(req.body);
        bcrypt.genSalt(10, (err, salt) =>{
            bcrypt.hash(myData.password, salt, function(err, hash){
                if(err){
                    console.log(err);
                }
                myData.password = hash;
                myData.save()
                console.log(myData)
        
            })
        })        
        
        console.log('Item has been saved')
        res.redirect('/salesPeopleList')

    } catch (error) {
        res.status(400).send('Unable to save to database')

    }
                                                          
});

router.get("/salesPeopleList", async(req, res) => {                                                              
    try {
        let items = await SalesPerson.find()
        res.render('display-sellers', { salesPeople: items })
    } catch (err) {
        res.status(400).send("Unable to find items in the database")
    }
});

//Delete Customer
// router.post('/delete/:customerID', async (req, res)=>{
//     try{
//         await Customer.findByIdAndRemove(req.params.customerId)
//         res.redirect('back')
//     }catch (error){
//         res.status(400).send('unable to delete from database');
//     }
// })

module.exports = router;

