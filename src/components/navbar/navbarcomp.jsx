import React, { useState }  from 'react';
import {  Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navbarcomp = (props) => {
	let [branches, setBranches] = useState([])
	let [location, setLocation] = useState('')
	let [category, setCategory] = useState('')
	let [isBranch, setIsBranch] = useState(false)
	const showBranches = (e, country) => {
		setLocation(country.name)
		setBranches(country.branches);
		setIsBranch(true)
	}

	const showCategories = (e, branch) => {
		setCategory(branch);
		props.giveData(location, category)
		
	}

	return (
		<div className="nav-main">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">Rental Management System</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavDropdown title="Select Loaction" id="basic-nav-dropdown">
							{
								props.catalogData.data.locations.map(country => {
									return(
										<NavDropdown.Item key={`${country.opco}-${country.name}`} onClick={(e) => showBranches(e,country)}>{country.name}
										</NavDropdown.Item>
									)
								})
							}	
						</NavDropdown>
						{
							isBranch ?
							<NavDropdown title="Select Category" id="basic-nav-dropdown">
							{
							branches.map(br => {
									return(
										<div onClick={(e) =>showCategories(e, br) }>
										<Link style={{"display": "block"}} key={br.branch_id} to={`/${location}/${br.branch_id}`}>{br.name}</Link>
										</div>
										
									)
								})
							}	
						</NavDropdown> : ''
						}
						
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navbarcomp;
