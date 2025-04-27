import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {



  showTabBar: string = 'overview';

  TabBar(elementId: string) {
    const selectedElement = document.getElementById(elementId);

    if (selectedElement) {
      // Remove "active" class from all filter tabs
      const elements = document.querySelectorAll('.tab-bar');
      elements.forEach((element) => {
        element.classList.remove('active');
      });

      // Add "active" class to the selected filter tab
      selectedElement.classList.add('active');

      // Trigger a reflow to apply the transition effect
      void selectedElement.offsetWidth;

      // Update the showTabBar variable after the transition is applied
      this.showTabBar = elementId;
    }
  }

  // ======================edit-Profile=====================
  profile = [
    { detail:'Full Name' , type:'text' , input:'Kevin Anderson'  },
    { detail:'Companay' , type:'text' , input:'Lueilwitz, Wisoky and Leuschke'  },
    { detail:'Job' , type:'text' , input:'Web Designer'  },
    { detail:'Country' , type:'text' , input:'USA'  },
    { detail:'Address' , type:'text' , input:'A108 Adam Street, New York, NY 535022'  },
    { detail:'Phone' , type:'text' , input:'+91 9773356655'  },
    { detail:'Email' , type:'text' , input:'company@gamil.com'  },
    { detail:'Twitter Profile' , type:'text' , input:'https://twitter.com/#'  },
    { detail:'Facebook Profile' , type:'text' , input:'https://facebook.com/#'  },
    { detail:'Instagram Profile' , type:'text' , input:'https://instagram.com/#'  },
    { detail:'Linkedin Profile' , type:'text' , input:'https://linkedin.com/#'  },
    // ======================edit-Profile end=====================
  ]


}
