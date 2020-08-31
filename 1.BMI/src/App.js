import React, {Component} from 'react';
import './App.css';
import Alert from './Components/Alert';

class bmi extends Component {

	constructor(props){
		super(props);
		this.state = {
			berat: '58',
			tinggi: '1.60',
			hasil: "Anda Ideal",
			pesan: ""
		};

		this.BeratChange = this.BeratChange.bind(this);
		this.TinggiChange = this.TinggiChange.bind(this);
		this.hitungBmi = this.hitungBmi.bind(this);
	}

	BeratChange(event) {
		this.setState({berat: event.target.value})
	}

	TinggiChange(event){
		this.setState({tinggi: event.target.value})
	}
	
	hitungBmi = (event) => {
		let tinggi = this.state.tinggi;
		let berat = this.state.berat;

		// hitung
		let hasil = berat / (tinggi*tinggi);

		// seleksi
		if(hasil <= 18.5){
			this.setState({hasil: "Anda Kurus"}) 
		} else if(hasil >= 18.5 && hasil <= 22.9){
			this.setState({hasil: "Anda Ideal"})
		} else if(hasil >= 23 && hasil <= 24.9){
			this.setState({hasil: "Anda Obesitas"})
		} else{
			this.setState({hasil: "Anda Tidak Normal"})
		}
			
		event.preventDefault();
	}

	render(){
		return(
			<div className="card col-sm-5 mx-auto m-5">
				<div className="card-header bg-sendary text-center text-dark">
					<h4>Body Mass Index</h4>
				</div>
				<div className="card-body">
				<div class="input-group mb-2">
						<div class="input-group-prepend">
						<label class="input-group-text" >Berat (kg) : </label>
						</div>
						<input type="number" className="form-control" value={this.state.berat} onChange={this.BeratChange}/>
					</div>
					<div class="input-group mb-2">
						<div class="input-group-prepend">
						<label class="input-group-text" >Tinggi (m) : </label>
						</div>
						<input type="number" className="form-control" value={this.state.tinggi} onChange={this.TinggiChange}/>
					</div>
				</div>
				<div className="card-footer">
					<button className="form-control btn btn-info text-white" onClick={this.hitungBmi} >
						Hitung
					</button>
					<h4 className="text-center mt-4">Hasil</h4>
					{/* Alert */}
					<Alert hasil={this.state.hasil} pesan={this.state.pesan}/>
				</div>
			</div>
		);
	}
}

export default bmi;