/*
Assignment: creating OOP code required for implementing a note taking application
*/

// specs code
describe("noteApp", function() {
    var noteApp;

	beforeEach(function(){
	    var author = author;
	    var notes = notes;
	 	noteApp = new NotesApplication(author,notes);
    });


	describe("Noteapp ",function(){
	    it("should have an author", function(){
	        var author = 'Ahmad';
	        expect(noteApp.author).toEqual(author);
	    
	 	});
	 
	    it("should have notes", function() {
	        var notes = ['books'];
	        expect(noteApp.notes).toEqual(notes);
	    });
	});
	 
	describe("Noteapp ", function(){
	    it("should have an array of notes ", function() {
            expect(typeof(noteApp.notes)).toBe("object");
	   });
	});

	describe("Notes application ", function() {
		it("should be able to create notes ", function() {
            var content = "a new content";
            expect(noteApp.create(content)).toEqual(['books','a new content']);
		});

		it("should return an object ", function() {
			var content = "a new content";
            expect(typeof(noteApp.create(content))).toBe("object");
		});
	});

	describe("Notes application ", function() {
		it("should have list notes function that returns object", function() {
			var note_id = 0;
			var notes = ['books'];
            expect(typeof(noteApp.listNotes())).toBe("object");
		});
		
	});

});