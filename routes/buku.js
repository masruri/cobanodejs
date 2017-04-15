function Buku(db) {
	const moment = require('moment')
	moment.locale('id')
	this.index=(req,res) => {
		db.query("select *from anggota order by id_anggota ASC", (err, result)=>{
			if (err) throw err;
			result.map((r)=> r.created_at = moment(r.created_at).format('MMMM Do YYYY, h:mm:ss a'))

			res.render('buku',{
				data: result
			})
		})
	}
	this.tambah = (req,res)=> {
		res.render('tambah-buku')
			
	}
	this.edit = (req,res,next)=> {
			db.query("select *from anggota where id_anggota='" + req.params.id + "'", (err, results)=>{
				if (err) throw err;
				console.log(results)
				if (results.length >=1) {
					res.render('tambah-buku', {
						data :results[0]
					})

				}else {
					next()
				}

				})
		}
	this.saveTambah = (req,res)=> {
		let data = req.body
		db.query("insert into anggota values('','" + data.nama +"','" + data.alamat +"','" + data.jk +"','" + data.lhr +"')",(err, results)=>{
			if (err) throw err;
			res.redirect('/buku')
		})

	}

	this.saveEdit = (req,res)=> {
		let data = req.body
		console.log(data)
		db.query("Update anggota set nama='" + data.nama +"', alamat='" + data.alamat +"', jenis_kelamin='" + data.jk +"', created_at='" + data.lhr +"' where id_anggota='" + req.params.id +"'",(err, results)=>{
			if (err) throw err;
			res.redirect('/buku')
		})

	}
	this.delete = (req,res)=> {
		let data = req.body
		db.query("delete from anggota where id_anggota='" + req.params.id +"'",(err, results)=>{
			if (err) throw err;
			res.redirect('/buku')
		})

	}
	
	this.delete = (req,res)=> {
		let data = req.body
		db.query("delete from anggota where id_anggota='" + req.params.id +"'",(err, results)=>{
			if (err) throw err;
			res.redirect('/buku')
		})

	}
}
module.exports= exports= Buku;