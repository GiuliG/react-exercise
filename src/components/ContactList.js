import React, { Component } from 'react';
import contacts from "../contacts.json";


 class ContactList extends Component {
        state = {
          contacts: contacts.slice(0,5)
        }
    
    addRandom=()=>{
        const celeb  = this.state.contacts;
        const randomNumber = Math.floor(Math.random() * contacts.length-1);
        celeb.push(contacts[randomNumber]);
        this.setState({ celeb })
      }

      sortByName=()=>{
        let {contacts} = this.state;
        contacts.sort((a, b) => (a.name < b.name) ? -1 : 1);
        this.setState({contacts});
         contacts.sort()
      }
    
      sortByPopularity=()=>{
        let {contacts} = this.state;
        contacts.sort((a, b) => b.popularity - a.popularity);
        this.setState({contacts});
      }
       deleteActor=(idx)=>{
        let {contacts} = this.state;
        contacts.splice(idx, 1);
        this.setState(contacts);
      }

    render() {
        return (
           <div>
               <ul>
                   {this.state.contacts.map((contact)=>{
                       return [
                           <li><img src={contact.pictureUrl} /></li>,
                           <li>{contact.name}</li>,
                           <li>{contact.popularity}</li>,
                           <button onClick={this.deleteActor}>Delete</button>
                       ]
                   }
                    )}
               </ul>
               <button onClick={this.addRandom}>Add Random Contact</button>
               <button onClick={this.sortByName}>Sort by Name</button>
               <button onClick={this.sortByPopularity}>Sort by Popularity</button>
              
           </div>

        )

    }
 }

 export default ContactList