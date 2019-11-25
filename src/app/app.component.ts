import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedDate = '';
  datePickerValue = '';

  chats = [
    {
      title: 'SNPs',
      timestamp: '2019-11-20 00:00',
      id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
      question: 'What are SNPs?',
      answer: 'I am not able to understand.',
      score: 98,
      signifier: 'H'
    },
    {
      title: 'SNPs',
      timestamp: '2019-11-19 00:00',
      id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
      question: 'What are SNPs?',
      answer: 'I am not able to understand.',
      score: 100,
      signifier: 'H'
    },
    {
      title: 'SNPs',
      timestamp: '2019-11-19 00:00',
      id: '|47ccb30-463f9dec2880da4e.f6036c81_',
      question: 'What are SNPs?',
      answer: 'I am not able to understand.',
      score: 47.86,
      signifier: 'H'
    },
    {
      title: 'SNPs',
      timestamp: '2019-11-19 00:00',
      id: '|47ccb35-463f9dec2880da4e.f6036c84_',
      question: 'What are SNPs?',
      answer: 'I am not able to understand.',
      score: 99,
      signifier: 'H'
    },
    {
      title: 'PGTai',
      timestamp: '2019-11-19 00:00',
      id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
      question: 'What is PGTai2.0?',
      answer: 'I am not able to understand',
      score: 100,
      signifier: 'P'
    },
    {
      title: 'PGTai',
      timestamp: '2019-11-19 00:00',
      id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
      question: 'What is PGTai2.0?',
      answer: 'I am not able to understand',
      score: 8.76,
      signifier: 'P'
    },
    {
      title: 'PGTai',
      timestamp: '2019-11-20 00:00',
      id: '|47cca5d-463f9dec2880da4e.f6036c14_',
      question: 'What is PGTai2.0?',
      answer: 'I am not able to understand',
      score: 99,
      signifier: 'P'
    },
    {
      title: 'PGTai',
      timestamp: '2019-11-20 00:00',
      id: '|47cca60-463f9dec2880da4e.f6036c15_',
      question: 'What is PGTai2.0?',
      answer: 'I am not able to understand',
      score: 99,
      signifier: 'P'
    },
    {
      title: 'Approved laboratory',
      timestamp: '2019-11-20 00:00',
      id: '|47cca63-463f9dec2880da4e.f6036c16_',
      question: 'Are you a JSOG-approved laboratory?',
      answer: 'I am not able to understand.',
      score: 77.02,
      signifier: ''
    },
    {
      title: 'Approved laboratory',
      timestamp: '2019-11-20 00:00',
      id: '|47cca66-463f9dec2880da4e.f6036c17_',
      question: 'Are you a JSOG-approved laboratory?',
      answer: 'I am not able to understand.',
      score: 99,
      signifier: ''
    },
    {
      title: 'Approved laboratory',
      timestamp: '2019-11-20 00:00',
      id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
      question: 'Are you a JSOG-approved laboratory?',
      answer: 'I am not able to understand.',
      score: 100,
      signifier: ''
    },
    {
      title: 'Approved laboratory',
      timestamp: '2019-11-20 00:00',
      id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
      question: 'Are you a JSOG-approved laboratory?',
      answer: 'I am not able to understand.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-20 00:00',
      id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
      question: 'What is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-20 00:00',
      id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
      question: 'What is validity',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 95,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-20 00:00',
      id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
      question: 'Why to use SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 58.82,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
      question: 'okay, can you ask questions to me?',
      answer: 'I\'m better at answering questions.',
      score: 37.75,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-18 00:00',
      id: '|47ccac1-463f9dec2880da4e.f6036c50_',
      question: 'But you are not answering my questions',
      answer: 'Sorry about that.',
      score: 34.56,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-18 00:00',
      id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
      question: 'What is a GPU?',
      answer: 'This is what I do every day.',
      score: 7.9,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-18 00:00',
      id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-18 00:00',
      id: '|47ccb11-463f9dec2880da4e.f6036c73_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-18 00:00',
      id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
      question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-18 00:00',
      id: '|47ccb37-463f9dec2880da4e.f6036c85_',
      question: 'my name is mahendra',
      answer: 'I don\'t have a name.',
      score: 22.1,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-19 00:00',
      id: '|47cca04-463f9dec2880da4e.f6036bef_',
      question: 'how many leaves i can have',
      answer: 'there are 3 months of maternity paid leaves',
      score: 84.32,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-19 00:00',
      id: '|47cca08-463f9dec2880da4e.f6036bf2_',
      question: 'hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-19 00:00',
      id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
      question: 'Weather',
      answer: 'Ok.',
      score: 8.14,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-19 00:00',
      id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-19 00:00',
      id: '|47cca11-463f9dec2880da4e.f6036bf6_',
      question: 'What you have',
      answer: 'This is what I do every day.',
      score: 50.62,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-19 00:00',
      id: '|47cca13-463f9dec2880da4e.f6036bf7_',
      question: 'Where are you',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47cca80-463f9dec2880da4e.f6036c2a_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47cca84-463f9dec2880da4e.f6036c2d_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-20 00:00',
      id: '|47cca8d-463f9dec2880da4e.f6036c34_',
      question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
      answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-20 00:00',
      id: '|47cca90-463f9dec2880da4e.f6036c36_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47cca92-463f9dec2880da4e.f6036c37_',
      question: 'what is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-20 00:00',
      id: '|47cca94-463f9dec2880da4e.f6036c38_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-20 00:00',
      id: '|47cca96-463f9dec2880da4e.f6036c39_',
      question: 'what is san?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccab0-463f9dec2880da4e.f6036c48_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccab2-463f9dec2880da4e.f6036c49_',
      question: 'can you cry?',
      answer: 'I don\'t have a body.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccab4-463f9dec2880da4e.f6036c4a_',
      question: 'Do you sleep?',
      answer: 'I don\'t have a body.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccab6-463f9dec2880da4e.f6036c4b_',
      question: 'This is boring',
      answer: 'I aim for efficiency.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccab9-463f9dec2880da4e.f6036c4c_',
      question: 'I am getting bored',
      answer: 'Well, let me know if there\'s anything I can do for you.',
      score: 61.99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccabb-463f9dec2880da4e.f6036c4d_',
      question: 'How old are you?',
      answer: 'Age doesn\'t really apply to me.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccabd-463f9dec2880da4e.f6036c4e_',
      question: 'I am younger than you',
      answer: 'You\'re definitely smarter than I am.',
      score: 43.04,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccac3-463f9dec2880da4e.f6036c51_',
      question: 'AMA',
      answer: 'I\'m better at answering questions.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-20 00:00',
      id: '|47ccac5-463f9dec2880da4e.f6036c52_',
      question: 'Okay, tell me who is your boss?',
      answer: 'I don\'t have family.',
      score: 38.42,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-20 00:00',
      id: '|47ccac7-463f9dec2880da4e.f6036c53_',
      question: 'Family?',
      answer: 'I don\'t have family.',
      score: 58.74,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-20 00:00',
      id: '|47ccac9-463f9dec2880da4e.f6036c54_',
      question: 'that\'s good, but I am asking about your boss',
      answer: 'I enjoy talking with you.',
      score: 34.96,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-22 00:00',
      id: '|47ccacb-463f9dec2880da4e.f6036c55_',
      question: 'hmm',
      answer: 'I\'m afraid I\'m not musically inclined.',
      score: 57.88,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-22 00:00',
      id: '|47ccacd-463f9dec2880da4e.f6036c56_',
      question: 'Okay do you know how to play game?',
      answer: 'I don\'t know.',
      score: 36.76,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-22 00:00',
      id: '|47ccacf-463f9dec2880da4e.f6036c57_',
      question: 'how to play',
      answer: 'Ok.',
      score: 37.64,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-22 00:00',
      id: '|47ccad1-463f9dec2880da4e.f6036c59_',
      question: 'how to play?',
      answer: 'Ok.',
      score: 37.64,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-22 00:00',
      id: '|47ccad3-463f9dec2880da4e.f6036c5a_',
      question: 'I am asking bro',
      answer: 'Okay.',
      score: 32.43,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-22 00:00',
      id: '|47ccade-463f9dec2880da4e.f6036c5e_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-21 00:00',
      id: '|47ccae0-463f9dec2880da4e.f6036c5f_',
      question: 'What is GUP?',
      answer: 'Just standing by, ready to help.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-21 00:00',
      id: '|47ccae2-463f9dec2880da4e.f6036c60_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-21 00:00',
      id: '|47ccae7-463f9dec2880da4e.f6036c62_',
      question: 'What is Sentinel?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-21 00:00',
      id: '|47ccae9-463f9dec2880da4e.f6036c63_',
      question: 'Who all need to become engaging parties in Sentinel?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-21 00:00',
      id: '|47ccaeb-463f9dec2880da4e.f6036c64_',
      question: 'And Validity of SAN?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-21 00:00',
      id: '|47ccaee-463f9dec2880da4e.f6036c65_',
      question: 'You are intelligent',
      answer: 'I do what I can.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-21 00:00',
      id: '|47ccaf2-463f9dec2880da4e.f6036c67_',
      question: 'How many holiday I can take?',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 66.46,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-21 00:00',
      id: '|47ccaf9-463f9dec2880da4e.f6036c6a_',
      question: 'Thanks',
      answer: 'You\'re welcome.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '22-01-2020 00:00',
      id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '23-01-2020 00:00',
      id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
      question: 'hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '24-01-2020 00:00',
      id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
      question: 'who are you',
      answer: 'I don\'t have a name.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '25-01-2020 00:00',
      id: '|47ccb30-463f9dec2880da4e.f6036c81_',
      question: 'can you tell me what is SAN',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 47.86,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '26-01-2020 00:00',
      id: '|47ccb35-463f9dec2880da4e.f6036c84_',
      question: 'SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '27-01-2020 00:00',
      id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
      question: 'can you tell if any holiday exist in month',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '28-01-2020 00:00',
      id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
      question: 'intent is',
      answer: 'Not at all.',
      score: 8.76,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '29-01-2020 00:00',
      id: '|47cca5d-463f9dec2880da4e.f6036c14_',
      question: 'SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '30-01-2020 00:00',
      id: '|47cca60-463f9dec2880da4e.f6036c15_',
      question: 'san Validity?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '31-01-2020 00:00',
      id: '|47cca63-463f9dec2880da4e.f6036c16_',
      question: 'san requirement',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 77.02,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '01-02-2020 00:00',
      id: '|47cca66-463f9dec2880da4e.f6036c17_',
      question: 'san engaging parties?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '02-02-2020 00:00',
      id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
      question: 'What is the validity of a SAN?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '03-02-2020 00:00',
      id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '04-02-2020 00:00',
      id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
      question: 'What is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '05-02-2020 00:00',
      id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '06-02-2020 00:00',
      id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '07-02-2020 00:00',
      id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
      question: 'What is validity',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 95,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '08-02-2020 00:00',
      id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
      question: 'Why to use SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 58.82,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '09-02-2020 00:00',
      id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
      question: 'okay, can you ask questions to me?',
      answer: 'I\'m better at answering questions.',
      score: 37.75,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '10-02-2020 00:00',
      id: '|47ccac1-463f9dec2880da4e.f6036c50_',
      question: 'But you are not answering my questions',
      answer: 'Sorry about that.',
      score: 34.56,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '11-02-2020 00:00',
      id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
      question: 'What is a GPU?',
      answer: 'This is what I do every day.',
      score: 7.9,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '12-02-2020 00:00',
      id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '13-02-2020 00:00',
      id: '|47ccb11-463f9dec2880da4e.f6036c73_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '14-02-2020 00:00',
      id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
      question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '15-02-2020 00:00',
      id: '|47ccb37-463f9dec2880da4e.f6036c85_',
      question: 'my name is mahendra',
      answer: 'I don\'t have a name.',
      score: 22.1,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '16-02-2020 00:00',
      id: '|47cca04-463f9dec2880da4e.f6036bef_',
      question: 'how many leaves i can have',
      answer: 'there are 3 months of maternity paid leaves',
      score: 84.32,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '17-02-2020 00:00',
      id: '|47cca08-463f9dec2880da4e.f6036bf2_',
      question: 'hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '18-02-2020 00:00',
      id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
      question: 'Weather',
      answer: 'Ok.',
      score: 8.14,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '19-02-2020 00:00',
      id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '20-02-2020 00:00',
      id: '|47cca11-463f9dec2880da4e.f6036bf6_',
      question: 'What you have',
      answer: 'This is what I do every day.',
      score: 50.62,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '21-02-2020 00:00',
      id: '|47cca13-463f9dec2880da4e.f6036bf7_',
      question: 'Where are you',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '22-02-2020 00:00',
      id: '|47cca80-463f9dec2880da4e.f6036c2a_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '23-02-2020 00:00',
      id: '|47cca84-463f9dec2880da4e.f6036c2d_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '24-02-2020 00:00',
      id: '|47cca8d-463f9dec2880da4e.f6036c34_',
      question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
      answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '25-02-2020 00:00',
      id: '|47cca90-463f9dec2880da4e.f6036c36_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '26-02-2020 00:00',
      id: '|47cca92-463f9dec2880da4e.f6036c37_',
      question: 'what is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '27-02-2020 00:00',
      id: '|47cca94-463f9dec2880da4e.f6036c38_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '28-02-2020 00:00',
      id: '|47cca96-463f9dec2880da4e.f6036c39_',
      question: 'what is san?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '29-02-2020 00:00',
      id: '|47ccab0-463f9dec2880da4e.f6036c48_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '01-03-2020 00:00',
      id: '|47ccab2-463f9dec2880da4e.f6036c49_',
      question: 'can you cry?',
      answer: 'I don\'t have a body.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '02-03-2020 00:00',
      id: '|47ccab4-463f9dec2880da4e.f6036c4a_',
      question: 'Do you sleep?',
      answer: 'I don\'t have a body.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '03-03-2020 00:00',
      id: '|47ccab6-463f9dec2880da4e.f6036c4b_',
      question: 'This is boring',
      answer: 'I aim for efficiency.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '04-03-2020 00:00',
      id: '|47ccab9-463f9dec2880da4e.f6036c4c_',
      question: 'I am getting bored',
      answer: 'Well, let me know if there\'s anything I can do for you.',
      score: 61.99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '05-03-2020 00:00',
      id: '|47ccabb-463f9dec2880da4e.f6036c4d_',
      question: 'How old are you?',
      answer: 'Age doesn\'t really apply to me.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '06-03-2020 00:00',
      id: '|47ccabd-463f9dec2880da4e.f6036c4e_',
      question: 'I am younger than you',
      answer: 'You\'re definitely smarter than I am.',
      score: 43.04,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '07-03-2020 00:00',
      id: '|47ccac3-463f9dec2880da4e.f6036c51_',
      question: 'AMA',
      answer: 'I\'m better at answering questions.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '08-03-2020 00:00',
      id: '|47ccac5-463f9dec2880da4e.f6036c52_',
      question: 'Okay, tell me who is your boss?',
      answer: 'I don\'t have family.',
      score: 38.42,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '09-03-2020 00:00',
      id: '|47ccac7-463f9dec2880da4e.f6036c53_',
      question: 'Family?',
      answer: 'I don\'t have family.',
      score: 58.74,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '10-03-2020 00:00',
      id: '|47ccac9-463f9dec2880da4e.f6036c54_',
      question: 'that\'s good, but I am asking about your boss',
      answer: 'I enjoy talking with you.',
      score: 34.96,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '11-03-2020 00:00',
      id: '|47ccacb-463f9dec2880da4e.f6036c55_',
      question: 'hmm',
      answer: 'I\'m afraid I\'m not musically inclined.',
      score: 57.88,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '12-03-2020 00:00',
      id: '|47ccacd-463f9dec2880da4e.f6036c56_',
      question: 'Okay do you know how to play game?',
      answer: 'I don\'t know.',
      score: 36.76,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '13-03-2020 00:00',
      id: '|47ccacf-463f9dec2880da4e.f6036c57_',
      question: 'how to play',
      answer: 'Ok.',
      score: 37.64,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '14-03-2020 00:00',
      id: '|47ccad1-463f9dec2880da4e.f6036c59_',
      question: 'how to play?',
      answer: 'Ok.',
      score: 37.64,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '15-03-2020 00:00',
      id: '|47ccad3-463f9dec2880da4e.f6036c5a_',
      question: 'I am asking bro',
      answer: 'Okay.',
      score: 32.43,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '16-03-2020 00:00',
      id: '|47ccade-463f9dec2880da4e.f6036c5e_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '17-03-2020 00:00',
      id: '|47ccae0-463f9dec2880da4e.f6036c5f_',
      question: 'What is GUP?',
      answer: 'Just standing by, ready to help.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '18-03-2020 00:00',
      id: '|47ccae2-463f9dec2880da4e.f6036c60_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '19-03-2020 00:00',
      id: '|47ccae7-463f9dec2880da4e.f6036c62_',
      question: 'What is Sentinel?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '20-03-2020 00:00',
      id: '|47ccae9-463f9dec2880da4e.f6036c63_',
      question: 'Who all need to become engaging parties in Sentinel?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '21-03-2020 00:00',
      id: '|47ccaeb-463f9dec2880da4e.f6036c64_',
      question: 'And Validity of SAN?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '22-03-2020 00:00',
      id: '|47ccaee-463f9dec2880da4e.f6036c65_',
      question: 'You are intelligent',
      answer: 'I do what I can.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '23-03-2020 00:00',
      id: '|47ccaf2-463f9dec2880da4e.f6036c67_',
      question: 'How many holiday I can take?',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 66.46,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '24-03-2020 00:00',
      id: '|47ccaf9-463f9dec2880da4e.f6036c6a_',
      question: 'Thanks',
      answer: 'You\'re welcome.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '25-03-2020 00:00',
      id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '26-03-2020 00:00',
      id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
      question: 'hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '27-03-2020 00:00',
      id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
      question: 'who are you',
      answer: 'I don\'t have a name.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '28-03-2020 00:00',
      id: '|47ccb30-463f9dec2880da4e.f6036c81_',
      question: 'can you tell me what is SAN',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 47.86,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '29-03-2020 00:00',
      id: '|47ccb35-463f9dec2880da4e.f6036c84_',
      question: 'SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '30-03-2020 00:00',
      id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
      question: 'can you tell if any holiday exist in month',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '31-03-2020 00:00',
      id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
      question: 'intent is',
      answer: 'Not at all.',
      score: 8.76,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '01-04-2020 00:00',
      id: '|47cca5d-463f9dec2880da4e.f6036c14_',
      question: 'SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '02-04-2020 00:00',
      id: '|47cca60-463f9dec2880da4e.f6036c15_',
      question: 'san Validity?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '03-04-2020 00:00',
      id: '|47cca63-463f9dec2880da4e.f6036c16_',
      question: 'san requirement',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 77.02,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '04-04-2020 00:00',
      id: '|47cca66-463f9dec2880da4e.f6036c17_',
      question: 'san engaging parties?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '05-04-2020 00:00',
      id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
      question: 'What is the validity of a SAN?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '06-04-2020 00:00',
      id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '07-04-2020 00:00',
      id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
      question: 'What is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '08-04-2020 00:00',
      id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '09-04-2020 00:00',
      id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '10-04-2020 00:00',
      id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
      question: 'What is validity',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 95,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '11-04-2020 00:00',
      id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
      question: 'Why to use SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 58.82,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '12-04-2020 00:00',
      id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
      question: 'okay, can you ask questions to me?',
      answer: 'I\'m better at answering questions.',
      score: 37.75,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '13-04-2020 00:00',
      id: '|47ccac1-463f9dec2880da4e.f6036c50_',
      question: 'But you are not answering my questions',
      answer: 'Sorry about that.',
      score: 34.56,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '14-04-2020 00:00',
      id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
      question: 'What is a GPU?',
      answer: 'This is what I do every day.',
      score: 7.9,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '15-04-2020 00:00',
      id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '16-04-2020 00:00',
      id: '|47ccb11-463f9dec2880da4e.f6036c73_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '17-04-2020 00:00',
      id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
      question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '18-04-2020 00:00',
      id: '|47ccb37-463f9dec2880da4e.f6036c85_',
      question: 'my name is mahendra',
      answer: 'I don\'t have a name.',
      score: 22.1,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '19-04-2020 00:00',
      id: '|47cca04-463f9dec2880da4e.f6036bef_',
      question: 'how many leaves i can have',
      answer: 'there are 3 months of maternity paid leaves',
      score: 84.32,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '20-04-2020 00:00',
      id: '|47cca08-463f9dec2880da4e.f6036bf2_',
      question: 'hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '21-04-2020 00:00',
      id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
      question: 'Weather',
      answer: 'Ok.',
      score: 8.14,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '22-04-2020 00:00',
      id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '23-04-2020 00:00',
      id: '|47cca11-463f9dec2880da4e.f6036bf6_',
      question: 'What you have',
      answer: 'This is what I do every day.',
      score: 50.62,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '24-04-2020 00:00',
      id: '|47cca13-463f9dec2880da4e.f6036bf7_',
      question: 'Where are you',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '25-04-2020 00:00',
      id: '|47cca80-463f9dec2880da4e.f6036c2a_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '26-04-2020 00:00',
      id: '|47cca84-463f9dec2880da4e.f6036c2d_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '27-04-2020 00:00',
      id: '|47cca8d-463f9dec2880da4e.f6036c34_',
      question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
      answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '28-04-2020 00:00',
      id: '|47cca90-463f9dec2880da4e.f6036c36_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '29-04-2020 00:00',
      id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '30-04-2020 00:00',
      id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
      question: 'hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '01-05-2020 00:00',
      id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
      question: 'who are you',
      answer: 'I don\'t have a name.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '02-05-2020 00:00',
      id: '|47ccb30-463f9dec2880da4e.f6036c81_',
      question: 'can you tell me what is SAN',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 47.86,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '03-05-2020 00:00',
      id: '|47ccb35-463f9dec2880da4e.f6036c84_',
      question: 'SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '04-05-2020 00:00',
      id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
      question: 'can you tell if any holiday exist in month',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '05-05-2020 00:00',
      id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
      question: 'intent is',
      answer: 'Not at all.',
      score: 8.76,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '06-05-2020 00:00',
      id: '|47cca5d-463f9dec2880da4e.f6036c14_',
      question: 'SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '07-05-2020 00:00',
      id: '|47cca60-463f9dec2880da4e.f6036c15_',
      question: 'san Validity?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 99,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '08-05-2020 00:00',
      id: '|47cca63-463f9dec2880da4e.f6036c16_',
      question: 'san requirement',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 77.02,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '09-05-2020 00:00',
      id: '|47cca66-463f9dec2880da4e.f6036c17_',
      question: 'san engaging parties?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 99,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '10-05-2020 00:00',
      id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
      question: 'What is the validity of a SAN?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '11-05-2020 00:00',
      id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '12-05-2020 00:00',
      id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
      question: 'What is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '13-05-2020 00:00',
      id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '14-05-2020 00:00',
      id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '15-05-2020 00:00',
      id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
      question: 'What is validity',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 95,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '16-05-2020 00:00',
      id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
      question: 'Why to use SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 58.82,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '17-05-2020 00:00',
      id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
      question: 'okay, can you ask questions to me?',
      answer: 'I\'m better at answering questions.',
      score: 37.75,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '18-05-2020 00:00',
      id: '|47ccac1-463f9dec2880da4e.f6036c50_',
      question: 'But you are not answering my questions',
      answer: 'Sorry about that.',
      score: 34.56,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '19-05-2020 00:00',
      id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
      question: 'What is a GPU?',
      answer: 'This is what I do every day.',
      score: 7.9,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '20-05-2020 00:00',
      id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '21-05-2020 00:00',
      id: '|47ccb11-463f9dec2880da4e.f6036c73_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '22-05-2020 00:00',
      id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
      question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '23-05-2020 00:00',
      id: '|47ccb37-463f9dec2880da4e.f6036c85_',
      question: 'my name is mahendra',
      answer: 'I don\'t have a name.',
      score: 22.1,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '24-05-2020 00:00',
      id: '|47cca04-463f9dec2880da4e.f6036bef_',
      question: 'how many leaves i can have',
      answer: 'there are 3 months of maternity paid leaves',
      score: 84.32,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '25-05-2020 00:00',
      id: '|47cca08-463f9dec2880da4e.f6036bf2_',
      question: 'hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '26-05-2020 00:00',
      id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
      question: 'Weather',
      answer: 'Ok.',
      score: 8.14,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '27-05-2020 00:00',
      id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '28-05-2020 00:00',
      id: '|47cca11-463f9dec2880da4e.f6036bf6_',
      question: 'What you have',
      answer: 'This is what I do every day.',
      score: 50.62,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '29-05-2020 00:00',
      id: '|47cca13-463f9dec2880da4e.f6036bf7_',
      question: 'Where are you',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 100,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '30-05-2020 00:00',
      id: '|47cca80-463f9dec2880da4e.f6036c2a_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89,
      signifier: ''
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '31-05-2020 00:00',
      id: '|47cca84-463f9dec2880da4e.f6036c2d_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '01-06-2020 00:00',
      id: '|47cca8d-463f9dec2880da4e.f6036c34_',
      question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
      answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
      score: 100,
      signifier: ''
    },
    {
      title: 'KteamsChat',
      timestamp: '02-06-2020 00:00',
      id: '|47cca90-463f9dec2880da4e.f6036c36_',
      question: 'hello',
      answer: 'Hello.',
      score: 100,
      signifier: ''
    }
  ];

  allChats = this.chats;

  filterChats(event) {
    if (event != null && event.value != null) {
      this.allChats = this.chats.filter(chat => new Date(chat.timestamp).getTime() === new Date(event.value).getTime());
    } else {
      this.allChats = this.chats;
    }
  }

  removeFilter() {
    this.datePickerValue = undefined;
    this.selectedDate = null;
    this.filterChats(null);
  }

}
