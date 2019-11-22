import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'botChat';
  chats = [
    {
      timestamp: '2019-11-20T14:02:06.2823772Z',
      resultCode: 200,
      duration: 1651.0316,
      id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
      question: 'what is SAN',
      // tslint:disable-next-line: max-line-length
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      performanceBucket: '1sec-3sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T14:02:48.0773021Z',
      resultCode: 200,
      duration: 461.7349,
      id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
      question: 'hi',
      answer: 'Hello.',
      score: 100,
      performanceBucket: '250ms-500ms',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T14:02:57.7860385Z',
      resultCode: 200,
      duration: 445.2158,
      id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
      question: 'who are you',
      answer: 'I don\'t have a name.',
      score: 100,
      performanceBucket: '250ms-500ms',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T14:03:10.0718863Z',
      resultCode: 200,
      duration: 755.6881,
      id: '|47ccb30-463f9dec2880da4e.f6036c81_',
      question: 'can you tell me what is SAN',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 47.86,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T14:08:21.5056852Z',
      resultCode: 200,
      duration: 499.631,
      id: '|47ccb35-463f9dec2880da4e.f6036c84_',
      question: 'SAN',
      // tslint:disable-next-line: max-line-length
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-19T15:38:00.1116947Z',
      resultCode: 200,
      duration: 5210.0185,
      id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
      question: 'can you tell if any holiday exist in month',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 100,
      performanceBucket: '3sec-7sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-19T15:43:34.1477372Z',
      resultCode: 200,
      duration: 902.488,
      id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
      question: 'intent is',
      answer: 'Not at all.',
      score: 8.76,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T02:27:55.6404006Z',
      resultCode: 200,
      duration: 1577.9962,
      id: '|47cca5d-463f9dec2880da4e.f6036c14_',
      question: 'SAN?',
      // tslint:disable-next-line: max-line-length
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99,
      performanceBucket: '1sec-3sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T02:28:04.9037783Z',
      resultCode: 200,
      duration: 504.0722,
      id: '|47cca60-463f9dec2880da4e.f6036c15_',
      question: 'san Validity?',
      // tslint:disable-next-line: max-line-length
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 99,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T02:28:15.0281049Z',
      resultCode: 200,
      duration: 221.973,
      id: '|47cca63-463f9dec2880da4e.f6036c16_',
      question: 'san requirement',
      // tslint:disable-next-line: max-line-length
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 77.02,
      performanceBucket: '<250ms',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T02:28:30.8985624Z',
      resultCode: 200,
      duration: 655.5424,
      id: '|47cca66-463f9dec2880da4e.f6036c17_',
      question: 'san engaging parties?',
      // tslint:disable-next-line: max-line-length
      answer: 'The following are to be added as Engaging Parties: - Any party signing the engagement contract or otherwise bound to the engagement contract.       - Any party that is to pay any of the fees for the service.       - Any party that has a role in defining the scope of the engagement.       - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the  following have to be included as Engaging Parties as well:      - a prime contractor hiring KPMG      - a subcontractor  of KPMG      - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 99,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:00:57.2054049Z',
      resultCode: 200,
      duration: 766.1263,
      id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
      question: 'What is the validity of a SAN?',
      // tslint:disable-next-line: max-line-length
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 100,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:01:17.6080314Z',
      resultCode: 200,
      duration: 666.4441,
      id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:01:27.2355092Z',
      resultCode: 200,
      duration: 370.8786,
      id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
      question: 'What is SAN?',
      // tslint:disable-next-line: max-line-length
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      performanceBucket: '250ms-500ms',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:01:29.4705009Z',
      resultCode: 200,
      duration: 339.3856,
      id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
      question: 'what is SAN',
      // tslint:disable-next-line: max-line-length
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      performanceBucket: '250ms-500ms',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:02:06.3120378Z',
      resultCode: 200,
      duration: 597.0806,
      id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
      question: 'what is SAN',
      // tslint:disable-next-line: max-line-length
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:02:09.9251735Z',
      resultCode: 200,
      duration: 446.4929,
      id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
      question: 'What is validity',
      // tslint:disable-next-line: max-line-length
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 95,
      performanceBucket: '250ms-500ms',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:02:16.3108706Z',
      resultCode: 200,
      duration: 629.2191,
      id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
      question: 'Why to use SAN?',
      // tslint:disable-next-line: max-line-length
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 58.82,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:47:15.5859581Z',
      resultCode: 200,
      duration: 680.1966,
      id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
      question: 'okay, can you ask questions to me?',
      answer: 'I\'m better at answering questions.',
      score: 37.75,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:47:33.1558267Z',
      resultCode: 200,
      duration: 526.9262,
      id: '|47ccac1-463f9dec2880da4e.f6036c50_',
      question: 'But you are not answering my questions',
      answer: 'Sorry about that.',
      score: 34.56,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:58:40.8084553Z',
      resultCode: 200,
      duration: 770.4765,
      id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
      question: 'What is a GPU?',
      answer: 'This is what I do every day.',
      score: 7.9,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:59:03.8983508Z',
      resultCode: 200,
      duration: 687.5446,
      id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
      question: 'What is a GUP?',
      // tslint:disable-next-line: max-line-length
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T10:48:46.4795205Z',
      resultCode: 200,
      duration: 1454.9042,
      id: '|47ccb11-463f9dec2880da4e.f6036c73_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      performanceBucket: '1sec-3sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T13:26:43.8690394Z',
      resultCode: 200,
      duration: 8815.1086,
      id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
      question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
      // tslint:disable-next-line: max-line-length
      answer: 'The following are to be added as Engaging Parties: - Any party signing the engagement contract or otherwise bound to the engagement contract.       - Any party that is to pay any of the fees for the service.       - Any party that has a role in defining the scope of the engagement.       - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the  following have to be included as Engaging Parties as well:      - a prime contractor hiring KPMG      - a subcontractor  of KPMG      - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100,
      performanceBucket: '7sec-15sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T14:11:17.6928096Z',
      resultCode: 200,
      duration: 891.3686,
      id: '|47ccb37-463f9dec2880da4e.f6036c85_',
      question: 'my name is Mahendra',
      answer: 'I don\'t have a name.',
      score: 22.1,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-19T16:09:56.6100857Z',
      resultCode: 200,
      duration: 4388.5931,
      id: '|47cca04-463f9dec2880da4e.f6036bef_',
      question: 'how many leaves i can have',
      answer: 'there are 3 months of maternity paid leaves',
      score: 84.32,
      performanceBucket: '3sec-7sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-19T16:16:50.3489937Z',
      resultCode: 200,
      duration: 3344.3953,
      id: '|47cca08-463f9dec2880da4e.f6036bf2_',
      question: 'hi',
      answer: 'Hello.',
      score: 100,
      performanceBucket: '3sec-7sec',
      iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754'
    },
    {
      timestamp: '2019-11-19T16:49:24.5355193Z',
      resultCode: 200,
      duration: 1248.9092,
      id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
      question: 'Weather',
      answer: 'Ok.',
      score: 8.14,
      performanceBucket: '1sec-3sec',
      iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754'
    },
    {
      timestamp: '2019-11-19T16:49:50.2812681Z',
      resultCode: 200,
      duration: 725.6019,
      id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754'
    },
    {
      timestamp: '2019-11-19T16:50:04.3322693Z',
      resultCode: 200,
      duration: 1114.8929,
      id: '|47cca11-463f9dec2880da4e.f6036bf6_',
      question: 'What you have',
      answer: 'This is what I do every day.',
      score: 50.62,
      performanceBucket: '1sec-3sec',
      iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754'
    },
    {
      timestamp: '2019-11-19T16:50:19.920435Z',
      resultCode: 200,
      duration: 467.2259,
      id: '|47cca13-463f9dec2880da4e.f6036bf7_',
      question: 'Where are you',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 100,
      performanceBucket: '250ms-500ms',
      iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754'
    },
    {
      timestamp: '2019-11-20T03:53:17.5598126Z',
      resultCode: 200,
      duration: 1470.7603,
      id: '|47cca80-463f9dec2880da4e.f6036c2a_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89,
      performanceBucket: '1sec-3sec',
      iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754'
    },
    {
      timestamp: '2019-11-20T03:53:43.457078Z',
      resultCode: 200,
      duration: 562.0582,
      id: '|47cca84-463f9dec2880da4e.f6036c2d_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754'
    },
    {
      timestamp: '2019-11-20T03:57:27.2727034Z',
      resultCode: 200,
      duration: 1503.2137,
      id: '|47cca8d-463f9dec2880da4e.f6036c34_',
      question: 'Kan PGT-SR auf ausgeglichene Translocations test?',
      // tslint:disable-next-line: max-line-length
      answer: 'Ja, unser Test kan die [wechselseitige Translocations] erkennen. Um zu bestätigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, müssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine maßgeschneiderte Fallbewertung durchführen, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden können',
      score: 100,
      performanceBucket: '1sec-3sec',
      iakpmgpoc: 'be0b00cc-71b0-496e-ba56-02447dbae754'
    },
    {
      timestamp: '2019-11-20T03:59:20.4418951Z',
      resultCode: 200,
      duration: 3199.4232,
      id: '|47cca90-463f9dec2880da4e.f6036c36_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      performanceBucket: '3sec-7sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T03:59:20.8168829Z',
      resultCode: 200,
      duration: 5218.3047,
      id: '|47cca92-463f9dec2880da4e.f6036c37_',
      question: 'what is SAN?',
      // tslint:disable-next-line: max-line-length
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      performanceBucket: '3sec-7sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T03:59:29.3331792Z',
      resultCode: 200,
      duration: 5257.859,
      id: '|47cca94-463f9dec2880da4e.f6036c38_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      performanceBucket: '3sec-7sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T03:59:41.0255457Z',
      resultCode: 200,
      duration: 542.4742,
      id: '|47cca96-463f9dec2880da4e.f6036c39_',
      question: 'what is san?',
      // tslint:disable-next-line: max-line-length
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:44:40.8312731Z',
      resultCode: 200,
      duration: 1811.9653,
      id: '|47ccab0-463f9dec2880da4e.f6036c48_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      performanceBucket: '1sec-3sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:44:54.4729508Z',
      resultCode: 200,
      duration: 3473.6462,
      id: '|47ccab2-463f9dec2880da4e.f6036c49_',
      question: 'can you cry?',
      answer: 'I don\'t have a body.',
      score: 100,
      performanceBucket: '3sec-7sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:45:14.2287014Z',
      resultCode: 200,
      duration: 1076.2215,
      id: '|47ccab4-463f9dec2880da4e.f6036c4a_',
      question: 'Do you sleep?',
      answer: 'I don\'t have a body.',
      score: 100,
      performanceBucket: '1sec-3sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:45:38.943416Z',
      resultCode: 200,
      duration: 1150.4165,
      id: '|47ccab6-463f9dec2880da4e.f6036c4b_',
      question: 'This is boring',
      answer: 'I aim for efficiency.',
      score: 100,
      performanceBucket: '1sec-3sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:45:54.4523435Z',
      resultCode: 200,
      duration: 925.5345,
      id: '|47ccab9-463f9dec2880da4e.f6036c4c_',
      question: 'I am getting bored',
      answer: 'Well, let me know if there\'s anything I can do for you.',
      score: 61.99,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:46:27.5351798Z',
      resultCode: 200,
      duration: 890.7553,
      id: '|47ccabb-463f9dec2880da4e.f6036c4d_',
      question: 'How old are you?',
      answer: 'Age doesn\'t really apply to me.',
      score: 100,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:46:43.5270002Z',
      resultCode: 200,
      duration: 902.1951,
      id: '|47ccabd-463f9dec2880da4e.f6036c4e_',
      question: 'I am younger than you',
      answer: 'You\'re definitely smarter than I am.',
      score: 43.04,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:47:42.8334173Z',
      resultCode: 200,
      duration: 149.1449,
      id: '|47ccac3-463f9dec2880da4e.f6036c51_',
      question: 'AMA',
      answer: 'I\'m better at answering questions.',
      score: 100,
      performanceBucket: '<250ms',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:48:19.3876773Z',
      resultCode: 200,
      duration: 763.6666,
      id: '|47ccac5-463f9dec2880da4e.f6036c52_',
      question: 'Okay, tell me who is your boss?',
      answer: 'I don\'t have family.',
      score: 38.42,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:48:32.4576842Z',
      resultCode: 200,
      duration: 591.5409,
      id: '|47ccac7-463f9dec2880da4e.f6036c53_',
      question: 'Family?',
      answer: 'I don\'t have family.',
      score: 58.74,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:48:51.7248717Z',
      resultCode: 200,
      duration: 774.3858,
      id: '|47ccac9-463f9dec2880da4e.f6036c54_',
      question: 'that\'s good, but I am asking about your boss',
      answer: 'I enjoy talking with you.',
      score: 34.96,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:49:06.2915623Z',
      resultCode: 200,
      duration: 737.005,
      id: '|47ccacb-463f9dec2880da4e.f6036c55_',
      question: 'hmm',
      answer: 'I\'m afraid I\'m not musically inclined.',
      score: 57.88,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:52:26.8707927Z',
      resultCode: 200,
      duration: 1632.2213,
      id: '|47ccacd-463f9dec2880da4e.f6036c56_',
      question: 'Okay do you know how to play game?',
      answer: 'I don\'t know.',
      score: 36.76,
      performanceBucket: '1sec-3sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:52:44.4381175Z',
      resultCode: 200,
      duration: 611.1387,
      id: '|47ccacf-463f9dec2880da4e.f6036c57_',
      question: 'how to play',
      answer: 'Ok.',
      score: 37.64,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:53:01.8939054Z',
      resultCode: 200,
      duration: 762.1098,
      id: '|47ccad1-463f9dec2880da4e.f6036c59_',
      question: 'how to play?',
      answer: 'Ok.',
      score: 37.64,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T04:53:16.199571Z',
      resultCode: 200,
      duration: 859.6217,
      id: '|47ccad3-463f9dec2880da4e.f6036c5a_',
      question: 'I am asking bro',
      answer: 'Okay.',
      score: 32.43,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T05:40:12.5080516Z',
      resultCode: 200,
      duration: 509.3487,
      id: '|47ccade-463f9dec2880da4e.f6036c5e_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T05:40:22.7081429Z',
      resultCode: 200,
      duration: 489.4984,
      id: '|47ccae0-463f9dec2880da4e.f6036c5f_',
      question: 'What is GUP?',
      answer: 'Just standing by, ready to help.',
      score: 99,
      performanceBucket: '250ms-500ms',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T05:40:44.8344982Z',
      resultCode: 200,
      duration: 690.6236,
      id: '|47ccae2-463f9dec2880da4e.f6036c60_',
      question: 'What is a GUP?',
      // tslint:disable-next-line: max-line-length
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T06:14:19.4883476Z',
      resultCode: 200,
      duration: 739.9379,
      id: '|47ccae7-463f9dec2880da4e.f6036c62_',
      question: 'What is Sentinel?',
      // tslint:disable-next-line: max-line-length
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 100,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T06:14:40.7434155Z',
      resultCode: 200,
      duration: 782.0788,
      id: '|47ccae9-463f9dec2880da4e.f6036c63_',
      question: 'Who all need to become engaging parties in Sentinel?',
      // tslint:disable-next-line: max-line-length
      answer: 'The following are to be added as Engaging Parties: - Any party signing the engagement contract or otherwise bound to the engagement contract.       - Any party that is to pay any of the fees for the service.       - Any party that has a role in defining the scope of the engagement.       - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the  following have to be included as Engaging Parties as well:      - a prime contractor hiring KPMG      - a subcontractor  of KPMG      - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T06:15:08.2016703Z',
      resultCode: 200,
      duration: 374.5363,
      id: '|47ccaeb-463f9dec2880da4e.f6036c64_',
      question: 'And Validity of SAN?',
      // tslint:disable-next-line: max-line-length
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 98,
      performanceBucket: '250ms-500ms',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T06:15:49.3005443Z',
      resultCode: 200,
      duration: 508.2441,
      id: '|47ccaee-463f9dec2880da4e.f6036c65_',
      question: 'You are intelligent',
      answer: 'I do what I can.',
      score: 99,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T06:42:32.2643895Z',
      resultCode: 200,
      duration: 802.9732,
      id: '|47ccaf2-463f9dec2880da4e.f6036c67_',
      question: 'How many holiday I can take?',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 66.46,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    },
    {
      timestamp: '2019-11-20T07:27:41.6537383Z',
      resultCode: 200,
      duration: 776.834,
      id: '|47ccaf9-463f9dec2880da4e.f6036c6a_',
      question: 'Thanks',
      answer: 'You\'re welcome.',
      score: 100,
      performanceBucket: '500ms-1sec',
      iakpmgpoc: '7b36cb7b-29a2-4f5e-a810-929ab59d03d6'
    }
  ];
}
