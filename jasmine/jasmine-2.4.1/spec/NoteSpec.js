/*
Assignment: creating OOP code required for implementing a note taking application
*/

// specs code
describe("noteApp", function() {
    var noteApp;

	beforeEach(function(){
	    
	 	noteApp = new NotesApplication(author,notes);
	 	var author = author;
	    var notes = notes;
    });


	describe("Note Application ",function(){
	    it("should have notes with an author", function(){
	        var author = 'Ahmad';
	        expect(noteApp.author).toEqual(author);
	    
	 	});
	 
	    it("should have notes", function() {
	        var notes = ['books'];
	        expect(noteApp.notes).toEqual(notes);
	    });
	});
	 
	describe("Notes Application ", function(){
	    it("should have an array of notes ", function() {
            expect(typeof(noteApp.notes)).toBe("object");
	   });
	});

	describe("Notes create function ", function() {
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
		
		it("should be able to get a particular note", function() {
            var note_id = 0;
            expect(noteApp.getNote(note_id)).toEqual('books');
		});

		it("should have a getNote that returns error when no index match", function() {
			var note_id = 4;
			expect(noteApp.getNote(note_id)).toEqual('no matching notes');
		});
	});

	describe("Notes Application variables ", function(){
		it(" 'author' and 'notes' must be defined",function(){
			var author = "Ahmad";
			var notes = ['rice'];
            expect(noteApp.author).toBeDefined();
            expect(noteApp.notes).toBeDefined();
		});
	});

	describe("Delete function ", function(){
		it("must return objects", function() {
			var notes = ['books'];
			var note_id = 0;
			//expect(noteApp.)
            expect(typeof(noteApp.deleteNote(note_id))).toBe('object');
		});
	});
	describe("Edit function ", function() {
		it("must return string", function() {
			var notes = ['books'];
			var new_content = "Games";
			var note_id = 0;
			expect(typeof(noteApp.edit(note_id,new_content))).toBe('string');
		});
	});


});