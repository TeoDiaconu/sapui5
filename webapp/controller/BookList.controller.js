sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
], function(Controller, Fragment, MessageToast) {
    'use strict';
    return Controller.extend("org.ubb.books.controller.BookList", {


         //delete button pressed
        onDelete(oEvent) {
            const selectedRow = this.byId("idBooksTable").getSelectedContexts();
            const sPathToBook = selectedRow[0].getPath();

            this.getView().getModel().remove(sPathToBook, {
                success: () => {
                    MessageToast.show("Book Deleted Successfully!");
                },
                error: () => {
                    MessageToast.show("Error in deleting Book!");
                }
            });
        },



        
        //add button pressed to open fragment
        onAdd : function () {
            
            var oView1 = this.getView();

			// create dialog lazily
			if (!this.pDialog1) {
				this.pDialog1 = Fragment.load({
					id: oView1.getId(),
					name: "org.ubb.books.view.AddDialog",
					controller: this
				}).then(function (oDialog1) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView1.addDependent(oDialog1);
					return oDialog1;
				});
			} 
			this.pDialog1.then(function(oDialog1) {
				oDialog1.open();
			});
        },

        //save button on fragment 
        saveBookInDatabase(oEvent) {

            var bCreate = true;

			var objectBook = {
				Isbn: "",
				Author: "",
				Title: "",
                DatePublished: "",
                NumberOfAvailableBooks: "",
				Language: "",
				TotalNumberOfBooks: ""
            };
            
            var oSimpleForm = oEvent.getSource().getParent().getParent();
            var aItems = oSimpleForm.getFormElements();
            var oControl = aItems[0].getFields()[0];
            
            //isbn
			if (oControl.getValue().length !== 0) {
				objectBook.Isbn = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //author
			oControl = aItems[1].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Author = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //title
			oControl = aItems[2].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Title = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //datepublished
			oControl = aItems[3].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.DatePublished = oControl.getDateValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //available of books
			oControl = aItems[4].getFields()[0];
			if (oControl.getValue().length !== 0) {
                var i = parseInt(oControl.getValue());
				objectBook.NumberOfAvailableBooks = i;
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }

            //language
			oControl = aItems[5].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Language = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //number of books
			oControl = aItems[6].getFields()[0];
			if (oControl.getValue().length !== 0) {
                var i = parseInt(oControl.getValue());
				objectBook.TotalNumberOfBooks = i;
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            this.getView().getModel().setUseBatch(false);
            
            this.getView().getModel().create("/Books", objectBook,{ 
                success: () =>  {
                    MessageToast.show("Book Added Successfully!");
                    
                },
                error: () => {
                    MessageToast.show("Error in adding book!");
                }
            });
        }, 



    
        onUpdate : function () {

            var oView2 = this.getView();

			// create dialog lazily
			if (!this.pDialog2) {
				this.pDialog2 = Fragment.load({
					id: oView2.getId(),
					name: "org.ubb.books.view.UpdateDialog",
					controller: this
				}).then(function (oDialog2) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView2.addDependent(oDialog2);
					return oDialog2;
				});
			} 
			this.pDialog2.then(function(oDialog2) {
				oDialog2.open();
			});
        },


        updateBookInDatabase(oEvent) { 
            var bCreate = true;

            var objectBook = {
				Isbn: "",
				Author: "",
				Title: "",
                DatePublished: "",
                NumberOfAvailableBooks: "",
				Language: "",
				TotalNumberOfBooks: ""
            };
            
            var oSimpleForm = oEvent.getSource().getParent().getParent();
            var aItems = oSimpleForm.getFormElements();
            var oControl = aItems[0].getFields()[0];
            

            //isbn
			oControl = aItems[0].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Isbn = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }   

            //author
			oControl = aItems[1].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Author = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //title
			oControl = aItems[2].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Title = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //datepublished
			oControl = aItems[3].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.DatePublished = oControl.getDateValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //available of books
			oControl = aItems[4].getFields()[0];
			if (oControl.getValue().length !== 0) {
                var i = parseInt(oControl.getValue());
				objectBook.NumberOfAvailableBooks = i;
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }

            //language
			oControl = aItems[5].getFields()[0];
			if (oControl.getValue().length !== 0) {
				objectBook.Language = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            //number of books
			oControl = aItems[6].getFields()[0];
			if (oControl.getValue().length !== 0) {
                var i = parseInt(oControl.getValue());
				objectBook.TotalNumberOfBooks = i;
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            
            this.getView().getModel().setUseBatch(false);
            
            this.getView().getModel().update("/Books(Isbn='"+objectBook.Isbn+"')", objectBook,{ 
                success: () =>  {
                    MessageToast.show("Book Updated Successfully!");
                },
                error: () => {
                    MessageToast.show("Error in updating book!");
                }
            });
        },
        onShow : function () {

            var oView = this.getView();

			// create dialog lazily
			if (!this.pDialog) {
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: "org.ubb.books.view.BorrowedBooks",
					controller: this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					return oDialog;
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});

        },

        closeBorrowedDialog: function () {
            this.byId("openDialog").close();
        },

        closeAddDialog: function () {
            this.byId("addDialog").close();
        },
        closeUpdateDialog: function () {
            this.byId("updateDialog").close();
        }

    });
});