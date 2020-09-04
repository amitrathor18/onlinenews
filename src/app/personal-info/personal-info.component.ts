import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  public list: any = [
    
    {
      author: "Investor's Business Daily",
      title:
        "Dow Jones Today: Tech Futures Fall Sharply Ahead Of Jobs Report After Stock Market Rally Rout - Investor's Business Daily",
      urlToImage:
        'https://www.investors.com/wp-content/uploads/2016/04/SSA-040816-shutterstock.jpg',
      description:
        "Dow Jones today: Dow futures rose further after the solid August jobs report. Tech futures signaled further losses after the stock market rally's sell-off.",
    },

    {
      author: 'Robert Ferris',
      title: 'Why buying cars can feel like pulling teeth - CNBC',
      description:
        'Americans have long regarded a trip to the dealership a necessary evil. A few tweaks could make the process a lot easier, and the coronavirus pandemic may actually spur the investment needed to make them happen.',
      urlToImage:
        'https://image.cnbcfm.com/api/v1/image/106251586-1574098091689rtx79ejd.jpg?v=1574098175',
     
    },

    {
      author: 'Steve Goldstein',
      title:
        'Tech bloodbath aside, ride these two giants for the second half of the recovery, veteran analyst says - MarketWatch',
      urlToImage:
        'https://s.marketwatch.com/public/resources/images/MW-IN875_cook_n_ZG_20200904040208.jpg',
      description: 'Critical information for the U.S. trading day',
    },

    {
      author: 'Billy Duberstein',
      title:
        'These 3 Tech Stocks Are Absurdly Overvalued Right Now - Motley Fool',

      urlToImage:
        'https://g.foolcdn.com/editorial/images/590375/gettyimages-521026909-1.jpg',
      description:
        'Be careful with these high-flying stocks -- they could come back down to Earth soon.',
    },

    {
      author: 'Keith Speights',
      title:
        'Got $3,000? Buying These 3 Stocks Could Make You Rich - Motley Fool',
      urlToImage:
        'https://g.foolcdn.com/editorial/images/589870/dollar-sign-and-light-bulb.jpg',
      description: 'All you have to do is buy -- and wait.',
    },

    {
      author: 'Associated Press',
      title:
        'Virgin Australia airline to be sold to US-based Bain Capital - Fox Business',
      urlToImage:
        'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/04/0/0/VirginAussie.jpg?ve=1&tl=1',
      description:
        'The airline in April became the world’s largest to seek bankruptcy protection after the coronavirus pandemic grounded much of the aviation industry',
    },

    {
      author: 'Laura He, CNN Business',
      title: 'Asian markets stumble as tech sell-off continues - CNN',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/200903233613-hong-kong-stock-exhange-0224-restricted-super-tease.jpg',
      description:
        'Asia Pacific markets fell sharply Friday, tracking a plunge on Wall Street and a particularly steep sell-off of tech stocks overnight.',
    },

    {
      author: 'Connie Loizos',
      title:
        'That Whole Foods is an Amazon warehouse; get used to it - TechCrunch',
      urlToImage:
        'https://techcrunch.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-03-at-4.14.05-PM.png?w=520',
      description:
        'Earlier this week, in Brooklyn, near the waterfront, Amazon opened what looks from the outside like a typical Whole Foods store. It isn’t open to the public, however; it’s a new fulfillment center. “Grocery delivery continues to be one of the fastest-growing ',
    },
    {
      author: 'Jeff Cox',
      title:
        'Payrolls increase by nearly 1.4 million as the unemployment rate tumbles - CNBC',
      urlToImage:
        'https://image.cnbcfm.com/api/v1/image/106666868-15976904892020-08-17t181200z_1611455073_rc2ufi90ow9x_rtrmadp_0_health-coronavirus-usa-new-york.jpeg?v=1597766503',
      description: 'null',
    },

  ];

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  ngOnInit() {
    this.makeAjaxCall();
  }

  async makeAjaxCall() {
    // const url =
    //   'https://newsapi.org/v2/top-headlines?country=us&apiKey=b38474a5147844eb8d155a8b6cd5e897';
    // const url =
    // 'https://jsonplaceholder.typicode.com/posts';
    //
    // const url = 'http://localhost:5500/';
    // const results =
    // await this.http.get(url).toPromise();

    // const res = 'http://localhost:5500/';
    // this.list = res;
  }

  showDetailsModal(item) {
    console.log(item);

    const modalRef = this.modalService.open(DetailsModalComponent, {
      centered: true,
    });

    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.data = item;
  }
}
