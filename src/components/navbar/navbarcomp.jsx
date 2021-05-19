import React, { useState }  from 'react';
import {  Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navbarcomp = (props) => {
	let [branches, setBranches] = useState([])
	let [location, setLocation] = useState('')
	// let [category, setCategory] = useState('')
	let [isBranch, setIsBranch] = useState(false)
	const showBranches = (e, country) => {
		setLocation(country.name)
		setBranches(country.branches);
		setIsBranch(true)
	}

	const showCategories = (e, branch) => {
		e.preventDefault();
		window.location.replace(`http://localhost:3000/${location}/${branch.branch_id}`)
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
										<NavDropdown.Item key={`${br.branch_id}`} onClick={e => showCategories(e, br)}>{br.name}
										</NavDropdown.Item>
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
