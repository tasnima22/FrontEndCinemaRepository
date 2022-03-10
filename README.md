Coverage: 95%

# Cinema Project

**Introduction**

The objective of this project was to create a CRUD application with the utilisation of supporting tools, methodologies and technologies that encapsulate all core modules covered during training. The technological tools used for creating this IMS project were:

•	Version Control System: Git

•	Source Code Management: GitHub

•	Kanban Board: Jira

•	Database Management System: MySQL Server 5.7+ (local or GCP instance)

•	Back-End Programming Language: Java - Using Spring Boot

•	Build Tool: Maven

•	Unit Testing: JUnit

•	Integration Tests: MockMVC

•	Front-End: HTML, CSS and JavaScript

## Project Plan

Using the project specifications document, I created a Jira Scrum Board to plan my project. I started off by creating separate epics for the Front-End, Back-End and Documentation for this project. The Jira Board can be viewed here: 
https://tasnima23.atlassian.net/jira/software/projects/CINEMA/boards/2/roadmap

![image](https://user-images.githubusercontent.com/64172539/157756029-041147ea-e724-4ccb-9cce-5245aafe348e.png)

## Version Control

For my Version Control, I used Git. I started off by making two respositories, one for the Front-End Respository and one for the Back-End Repository. Within these Reposotiories, I created a dev branches (which branches off the main branch) and also created a feature branches (which branches off the dev branch) for each function. 

## Database 

For this project, there were two databases that were required: MySQL and H2. MySQL was used to store the data from the applications, such as the data sent from the browser and from postman. H2 Console was used to test the Back-End application. 

![image](https://user-images.githubusercontent.com/64172539/157757470-096f3757-48cd-415f-8c90-6d29ef305f07.png)

This image shows the fields in the Cinema Database

![image](https://user-images.githubusercontent.com/64172539/157757554-350ccd79-a0fd-4c00-bc82-3e78b544db8a.png)

Sample data inserted into the database 

## Back-End

For this project, Spring Boot was used for the Back-End in Java. The CRUD functionality was created using @Mapping. 

```
@Autowired
	public CinemaController(CinemaService service) {
		super();
		this.service=service;
	}
	
	@PostMapping("/create") // @RequestBody pulls the parameter from the body of the request

	public ResponseEntity<Cinema> createCinema(@RequestBody Cinema c) {
		Cinema created = this.service.create(c);
		ResponseEntity<Cinema> response = new ResponseEntity<Cinema>(created, HttpStatus.CREATED); // 201 - created
		return response;
	}
	
	@GetMapping("/getAll") 
	public ResponseEntity<List<Cinema>> getAllCinema() {
		return ResponseEntity.ok(this.service.getAll()); //200 - ok
	}
	
	@GetMapping("/get/{id}")  // 200 ok
	public Cinema getCinemaID(@PathVariable Integer id) {
		return this.service.getOne(id);
	}
	@PutMapping("/replace/{id}") // 202 accepted
	public ResponseEntity<Cinema> replaceCinema(@PathVariable Integer id, @RequestBody Cinema newCinema) {
		Cinema body = this.service.replace(id, newCinema);
		ResponseEntity<Cinema> response = new ResponseEntity<Cinema>(body, HttpStatus.ACCEPTED);
		return response;
	}
	@DeleteMapping("/remove/{id}") // 204 no content 
	public ResponseEntity<?> removeCinemaID(@PathVariable Integer id) {
		this.service.remove(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/getByCinema/{cinema}") //200 ok
	public ResponseEntity<List<Cinema>> getCinemaByCinema(@PathVariable String cinema) {
	List<Cinema> found = this.service.getAllbyCinema(cinema);
	return ResponseEntity.ok(found);
	}
	
	@GetMapping("/getByFilm/{film}")
	public ResponseEntity<List<Cinema>> getCinemaByFilm(@PathVariable String film) {
		List<Cinema> found = this.service.getByFilm(film);
		return ResponseEntity.ok(found);
	}
	
	@GetMapping("/getByCost/{cost}")
	public ResponseEntity<List<Cinema>> getCinemaByCost(@PathVariable Double cost) {
		List<Cinema> found = this.service.getCinemaByCost(cost);
		return ResponseEntity.ok(found);
	}
}

```

## Testing 

For the Integration tests, MockMVC was used to test the CinemaController class 

![image](https://user-images.githubusercontent.com/64172539/157771105-4fb0a473-c452-4a36-ab89-8d1edc70b5d9.png)

![image](https://user-images.githubusercontent.com/64172539/157771316-191c548f-4747-4421-81c4-700dc8d48b80.png)

This image shows the 95% coverage obtained 


## Front-End 

HTML, CSS and JavaScript were used to create the Front-End of this project. 

![image](https://user-images.githubusercontent.com/64172539/157773875-cb754db9-e5ce-4795-81f5-e93b122d0e43.png)

This allows for data to be added to the cinema database, edited and deleted by ID. Everytime data is submitted to the database, the data is stored in MySQL and can also be viewed by clicking the refresh button to view it on the table at the bottom of the page. 

![image](https://user-images.githubusercontent.com/64172539/157772263-eb03792d-639e-4930-a78d-fcca196578f4.png)

There is also a delete button to remove the data from the table on the page and the database in MySQL. 



