const router = require('express').Router();
const VendorController = require('../controllers/VendorController');

router.post('/basic-info', VendorController.newVendor);

module.exports = router;

