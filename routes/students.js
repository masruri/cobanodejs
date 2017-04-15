var student = require("../model/student").student;
var mongoose = require('mongoose');
var config = require('../config/db');
var express = require('express');
var router = express.Router();

// menghubungkan dengan database mongodb
mongoose.connect(config.db);

//root
router.get('/', function(req,res){
	return res.send('Akademis Api');
});

//ambil semua data studenst
router.get('/get/all/mahasiswa', function(req,res){
	studenst.find({}, function(err,data) {
		if(err){
			return res.send(err);
		}
		res.json(data);
	});
});

//simpan data studenst
router.post('/post/mahasiswa', function(req,res){
	var mahasiswa = new student;
	mahasiswa.nim = req.body.nim;
	mahasiswa.nama = req.body.nama;
	mahasiswa.save(function(err){
		if(err) {
			return res.send(err);
		}
		res.json({'status': '200','keterangan':'Success'});
	});
});
//hapus data studenst
router.delete('/delete/mahasiswa', function(req,res) {
	student.remove({'nim':req.body.nim}, function(err){
		if(err){
			return res.send(err);
		}
	});
});

// hapus data students
router.delete('/delete/mahasiswa', function(req,res){
	student.remove({'nim': req.body.nim}, function(err){
		if(err){
			return res.send(err);
		}
		res.json({'status':'200','keterangan':'Success'});
	});
});
// ubah data students
router.post('/update/mahasiswa', function(req,res){
	student.update({'nim':req.body.nim_lama},{'nim':req.body.nim,'nama':req.body.nama}, function(err,data){
		if(err){
			return res.send(err);
		}
	});
});
module.exports = router;
