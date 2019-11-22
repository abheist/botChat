import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedDate = '';
  chats = [
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-20 00:00',
      id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-21 00:00',
      id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
      question: 'hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-22 00:00',
      id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
      question: 'who are you',
      answer: 'I don\'t have a name.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-23 00:00',
      id: '|47ccb30-463f9dec2880da4e.f6036c81_',
      question: 'can you tell me what is SAN',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 47.86
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-24 00:00',
      id: '|47ccb35-463f9dec2880da4e.f6036c84_',
      question: 'SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-25 00:00',
      id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
      question: 'can you tell if any holiday exist in month',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-26 00:00',
      id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
      question: 'intent is',
      answer: 'Not at all.',
      score: 8.76
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-27 00:00',
      id: '|47cca5d-463f9dec2880da4e.f6036c14_',
      question: 'SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-11-28 00:00',
      id: '|47cca60-463f9dec2880da4e.f6036c15_',
      question: 'san Validity?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 99
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-29 00:00',
      id: '|47cca63-463f9dec2880da4e.f6036c16_',
      question: 'san requirement',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 77.02
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-11-30 00:00',
      id: '|47cca66-463f9dec2880da4e.f6036c17_',
      question: 'san engaging parties?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-01 00:00',
      id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
      question: 'What is the validity of a SAN?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-02 00:00',
      id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-03 00:00',
      id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
      question: 'What is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-04 00:00',
      id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-05 00:00',
      id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-06 00:00',
      id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
      question: 'What is validity',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 95
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-07 00:00',
      id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
      question: 'Why to use SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 58.82
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-08 00:00',
      id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
      question: 'okay, can you ask questions to me?',
      answer: 'I\'m better at answering questions.',
      score: 37.75
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-09 00:00',
      id: '|47ccac1-463f9dec2880da4e.f6036c50_',
      question: 'But you are not answering my questions',
      answer: 'Sorry about that.',
      score: 34.56
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-10 00:00',
      id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
      question: 'What is a GPU?',
      answer: 'This is what I do every day.',
      score: 7.9
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-11 00:00',
      id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-12 00:00',
      id: '|47ccb11-463f9dec2880da4e.f6036c73_',
      question: 'hello',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-13 00:00',
      id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
      question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-14 00:00',
      id: '|47ccb37-463f9dec2880da4e.f6036c85_',
      question: 'my name is mahendra',
      answer: 'I don\'t have a name.',
      score: 22.1
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-15 00:00',
      id: '|47cca04-463f9dec2880da4e.f6036bef_',
      question: 'how many leaves i can have',
      answer: 'there are 3 months of maternity paid leaves',
      score: 84.32
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-16 00:00',
      id: '|47cca08-463f9dec2880da4e.f6036bf2_',
      question: 'hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-17 00:00',
      id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
      question: 'Weather',
      answer: 'Ok.',
      score: 8.14
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-18 00:00',
      id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-19 00:00',
      id: '|47cca11-463f9dec2880da4e.f6036bf6_',
      question: 'What you have',
      answer: 'This is what I do every day.',
      score: 50.62
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-20 00:00',
      id: '|47cca13-463f9dec2880da4e.f6036bf7_',
      question: 'Where are you',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-21 00:00',
      id: '|47cca80-463f9dec2880da4e.f6036c2a_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-22 00:00',
      id: '|47cca84-463f9dec2880da4e.f6036c2d_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-23 00:00',
      id: '|47cca8d-463f9dec2880da4e.f6036c34_',
      question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
      answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-24 00:00',
      id: '|47cca90-463f9dec2880da4e.f6036c36_',
      question: 'hello',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-25 00:00',
      id: '|47cca92-463f9dec2880da4e.f6036c37_',
      question: 'what is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-26 00:00',
      id: '|47cca94-463f9dec2880da4e.f6036c38_',
      question: 'hello',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2019-12-27 00:00',
      id: '|47cca96-463f9dec2880da4e.f6036c39_',
      question: 'what is san?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-28 00:00',
      id: '|47ccab0-463f9dec2880da4e.f6036c48_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-29 00:00',
      id: '|47ccab2-463f9dec2880da4e.f6036c49_',
      question: 'can you cry?',
      answer: 'I don\'t have a body.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-30 00:00',
      id: '|47ccab4-463f9dec2880da4e.f6036c4a_',
      question: 'Do you sleep?',
      answer: 'I don\'t have a body.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2019-12-31 00:00',
      id: '|47ccab6-463f9dec2880da4e.f6036c4b_',
      question: 'This is boring',
      answer: 'I aim for efficiency.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-01 00:00',
      id: '|47ccab9-463f9dec2880da4e.f6036c4c_',
      question: 'I am getting bored',
      answer: 'Well, let me know if there\'s anything I can do for you.',
      score: 61.99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-02 00:00',
      id: '|47ccabb-463f9dec2880da4e.f6036c4d_',
      question: 'How old are you?',
      answer: 'Age doesn\'t really apply to me.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-03 00:00',
      id: '|47ccabd-463f9dec2880da4e.f6036c4e_',
      question: 'I am younger than you',
      answer: 'You\'re definitely smarter than I am.',
      score: 43.04
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-04 00:00',
      id: '|47ccac3-463f9dec2880da4e.f6036c51_',
      question: 'AMA',
      answer: 'I\'m better at answering questions.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-05 00:00',
      id: '|47ccac5-463f9dec2880da4e.f6036c52_',
      question: 'Okay, tell me who is your boss?',
      answer: 'I don\'t have family.',
      score: 38.42
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-06 00:00',
      id: '|47ccac7-463f9dec2880da4e.f6036c53_',
      question: 'Family?',
      answer: 'I don\'t have family.',
      score: 58.74
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-07 00:00',
      id: '|47ccac9-463f9dec2880da4e.f6036c54_',
      question: 'that\'s good, but I am asking about your boss',
      answer: 'I enjoy talking with you.',
      score: 34.96
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-08 00:00',
      id: '|47ccacb-463f9dec2880da4e.f6036c55_',
      question: 'hmm',
      answer: 'I\'m afraid I\'m not musically inclined.',
      score: 57.88
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-09 00:00',
      id: '|47ccacd-463f9dec2880da4e.f6036c56_',
      question: 'Okay do you know how to play game?',
      answer: 'I don\'t know.',
      score: 36.76
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-10 00:00',
      id: '|47ccacf-463f9dec2880da4e.f6036c57_',
      question: 'how to play',
      answer: 'Ok.',
      score: 37.64
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-11 00:00',
      id: '|47ccad1-463f9dec2880da4e.f6036c59_',
      question: 'how to play?',
      answer: 'Ok.',
      score: 37.64
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-12 00:00',
      id: '|47ccad3-463f9dec2880da4e.f6036c5a_',
      question: 'I am asking bro',
      answer: 'Okay.',
      score: 32.43
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-13 00:00',
      id: '|47ccade-463f9dec2880da4e.f6036c5e_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-14 00:00',
      id: '|47ccae0-463f9dec2880da4e.f6036c5f_',
      question: 'What is GUP?',
      answer: 'Just standing by, ready to help.',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-15 00:00',
      id: '|47ccae2-463f9dec2880da4e.f6036c60_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-16 00:00',
      id: '|47ccae7-463f9dec2880da4e.f6036c62_',
      question: 'What is Sentinel?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-17 00:00',
      id: '|47ccae9-463f9dec2880da4e.f6036c63_',
      question: 'Who all need to become engaging parties in Sentinel?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-18 00:00',
      id: '|47ccaeb-463f9dec2880da4e.f6036c64_',
      question: 'And Validity of SAN?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-19 00:00',
      id: '|47ccaee-463f9dec2880da4e.f6036c65_',
      question: 'You are intelligent',
      answer: 'I do what I can.',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-20 00:00',
      id: '|47ccaf2-463f9dec2880da4e.f6036c67_',
      question: 'How many holiday I can take?',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 66.46
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-21 00:00',
      id: '|47ccaf9-463f9dec2880da4e.f6036c6a_',
      question: 'Thanks',
      answer: 'You\'re welcome.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-22 00:00',
      id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-23 00:00',
      id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
      question: 'hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-24 00:00',
      id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
      question: 'who are you',
      answer: 'I don\'t have a name.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-25 00:00',
      id: '|47ccb30-463f9dec2880da4e.f6036c81_',
      question: 'can you tell me what is SAN',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 47.86
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-26 00:00',
      id: '|47ccb35-463f9dec2880da4e.f6036c84_',
      question: 'SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-27 00:00',
      id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
      question: 'can you tell if any holiday exist in month',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-28 00:00',
      id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
      question: 'intent is',
      answer: 'Not at all.',
      score: 8.76
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-29 00:00',
      id: '|47cca5d-463f9dec2880da4e.f6036c14_',
      question: 'SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-01-30 00:00',
      id: '|47cca60-463f9dec2880da4e.f6036c15_',
      question: 'san Validity?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 99
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-01-31 00:00',
      id: '|47cca63-463f9dec2880da4e.f6036c16_',
      question: 'san requirement',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 77.02
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-01 00:00',
      id: '|47cca66-463f9dec2880da4e.f6036c17_',
      question: 'san engaging parties?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-02 00:00',
      id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
      question: 'What is the validity of a SAN?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-03 00:00',
      id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-04 00:00',
      id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
      question: 'What is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-05 00:00',
      id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-06 00:00',
      id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-07 00:00',
      id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
      question: 'What is validity',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 95
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-08 00:00',
      id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
      question: 'Why to use SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 58.82
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-09 00:00',
      id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
      question: 'okay, can you ask questions to me?',
      answer: 'I\'m better at answering questions.',
      score: 37.75
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-10 00:00',
      id: '|47ccac1-463f9dec2880da4e.f6036c50_',
      question: 'But you are not answering my questions',
      answer: 'Sorry about that.',
      score: 34.56
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-11 00:00',
      id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
      question: 'What is a GPU?',
      answer: 'This is what I do every day.',
      score: 7.9
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-12 00:00',
      id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-13 00:00',
      id: '|47ccb11-463f9dec2880da4e.f6036c73_',
      question: 'hello',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-14 00:00',
      id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
      question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-15 00:00',
      id: '|47ccb37-463f9dec2880da4e.f6036c85_',
      question: 'my name is mahendra',
      answer: 'I don\'t have a name.',
      score: 22.1
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-16 00:00',
      id: '|47cca04-463f9dec2880da4e.f6036bef_',
      question: 'how many leaves i can have',
      answer: 'there are 3 months of maternity paid leaves',
      score: 84.32
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-17 00:00',
      id: '|47cca08-463f9dec2880da4e.f6036bf2_',
      question: 'hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-18 00:00',
      id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
      question: 'Weather',
      answer: 'Ok.',
      score: 8.14
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-19 00:00',
      id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-20 00:00',
      id: '|47cca11-463f9dec2880da4e.f6036bf6_',
      question: 'What you have',
      answer: 'This is what I do every day.',
      score: 50.62
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-21 00:00',
      id: '|47cca13-463f9dec2880da4e.f6036bf7_',
      question: 'Where are you',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-22 00:00',
      id: '|47cca80-463f9dec2880da4e.f6036c2a_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-23 00:00',
      id: '|47cca84-463f9dec2880da4e.f6036c2d_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-24 00:00',
      id: '|47cca8d-463f9dec2880da4e.f6036c34_',
      question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
      answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-25 00:00',
      id: '|47cca90-463f9dec2880da4e.f6036c36_',
      question: 'hello',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-26 00:00',
      id: '|47cca92-463f9dec2880da4e.f6036c37_',
      question: 'what is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-27 00:00',
      id: '|47cca94-463f9dec2880da4e.f6036c38_',
      question: 'hello',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-02-28 00:00',
      id: '|47cca96-463f9dec2880da4e.f6036c39_',
      question: 'what is san?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-02-29 00:00',
      id: '|47ccab0-463f9dec2880da4e.f6036c48_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-01 00:00',
      id: '|47ccab2-463f9dec2880da4e.f6036c49_',
      question: 'can you cry?',
      answer: 'I don\'t have a body.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-02 00:00',
      id: '|47ccab4-463f9dec2880da4e.f6036c4a_',
      question: 'Do you sleep?',
      answer: 'I don\'t have a body.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-03 00:00',
      id: '|47ccab6-463f9dec2880da4e.f6036c4b_',
      question: 'This is boring',
      answer: 'I aim for efficiency.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-04 00:00',
      id: '|47ccab9-463f9dec2880da4e.f6036c4c_',
      question: 'I am getting bored',
      answer: 'Well, let me know if there\'s anything I can do for you.',
      score: 61.99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-05 00:00',
      id: '|47ccabb-463f9dec2880da4e.f6036c4d_',
      question: 'How old are you?',
      answer: 'Age doesn\'t really apply to me.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-06 00:00',
      id: '|47ccabd-463f9dec2880da4e.f6036c4e_',
      question: 'I am younger than you',
      answer: 'You\'re definitely smarter than I am.',
      score: 43.04
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-07 00:00',
      id: '|47ccac3-463f9dec2880da4e.f6036c51_',
      question: 'AMA',
      answer: 'I\'m better at answering questions.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-08 00:00',
      id: '|47ccac5-463f9dec2880da4e.f6036c52_',
      question: 'Okay, tell me who is your boss?',
      answer: 'I don\'t have family.',
      score: 38.42
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-09 00:00',
      id: '|47ccac7-463f9dec2880da4e.f6036c53_',
      question: 'Family?',
      answer: 'I don\'t have family.',
      score: 58.74
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-10 00:00',
      id: '|47ccac9-463f9dec2880da4e.f6036c54_',
      question: 'that\'s good, but I am asking about your boss',
      answer: 'I enjoy talking with you.',
      score: 34.96
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-11 00:00',
      id: '|47ccacb-463f9dec2880da4e.f6036c55_',
      question: 'hmm',
      answer: 'I\'m afraid I\'m not musically inclined.',
      score: 57.88
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-12 00:00',
      id: '|47ccacd-463f9dec2880da4e.f6036c56_',
      question: 'Okay do you know how to play game?',
      answer: 'I don\'t know.',
      score: 36.76
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-13 00:00',
      id: '|47ccacf-463f9dec2880da4e.f6036c57_',
      question: 'how to play',
      answer: 'Ok.',
      score: 37.64
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-14 00:00',
      id: '|47ccad1-463f9dec2880da4e.f6036c59_',
      question: 'how to play?',
      answer: 'Ok.',
      score: 37.64
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-15 00:00',
      id: '|47ccad3-463f9dec2880da4e.f6036c5a_',
      question: 'I am asking bro',
      answer: 'Okay.',
      score: 32.43
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-16 00:00',
      id: '|47ccade-463f9dec2880da4e.f6036c5e_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-17 00:00',
      id: '|47ccae0-463f9dec2880da4e.f6036c5f_',
      question: 'What is GUP?',
      answer: 'Just standing by, ready to help.',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-18 00:00',
      id: '|47ccae2-463f9dec2880da4e.f6036c60_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-19 00:00',
      id: '|47ccae7-463f9dec2880da4e.f6036c62_',
      question: 'What is Sentinel?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-20 00:00',
      id: '|47ccae9-463f9dec2880da4e.f6036c63_',
      question: 'Who all need to become engaging parties in Sentinel?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-21 00:00',
      id: '|47ccaeb-463f9dec2880da4e.f6036c64_',
      question: 'And Validity of SAN?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-22 00:00',
      id: '|47ccaee-463f9dec2880da4e.f6036c65_',
      question: 'You are intelligent',
      answer: 'I do what I can.',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-23 00:00',
      id: '|47ccaf2-463f9dec2880da4e.f6036c67_',
      question: 'How many holiday I can take?',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 66.46
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-24 00:00',
      id: '|47ccaf9-463f9dec2880da4e.f6036c6a_',
      question: 'Thanks',
      answer: 'You\'re welcome.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-25 00:00',
      id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-26 00:00',
      id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
      question: 'hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-27 00:00',
      id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
      question: 'who are you',
      answer: 'I don\'t have a name.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-28 00:00',
      id: '|47ccb30-463f9dec2880da4e.f6036c81_',
      question: 'can you tell me what is SAN',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 47.86
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-03-29 00:00',
      id: '|47ccb35-463f9dec2880da4e.f6036c84_',
      question: 'SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-30 00:00',
      id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
      question: 'can you tell if any holiday exist in month',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-03-31 00:00',
      id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
      question: 'intent is',
      answer: 'Not at all.',
      score: 8.76
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-01 00:00',
      id: '|47cca5d-463f9dec2880da4e.f6036c14_',
      question: 'SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-02 00:00',
      id: '|47cca60-463f9dec2880da4e.f6036c15_',
      question: 'san Validity?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 99
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-03 00:00',
      id: '|47cca63-463f9dec2880da4e.f6036c16_',
      question: 'san requirement',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 77.02
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-04 00:00',
      id: '|47cca66-463f9dec2880da4e.f6036c17_',
      question: 'san engaging parties?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-05 00:00',
      id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
      question: 'What is the validity of a SAN?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-06 00:00',
      id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-07 00:00',
      id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
      question: 'What is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-08 00:00',
      id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-09 00:00',
      id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-10 00:00',
      id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
      question: 'What is validity',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 95
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-11 00:00',
      id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
      question: 'Why to use SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 58.82
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-12 00:00',
      id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
      question: 'okay, can you ask questions to me?',
      answer: 'I\'m better at answering questions.',
      score: 37.75
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-13 00:00',
      id: '|47ccac1-463f9dec2880da4e.f6036c50_',
      question: 'But you are not answering my questions',
      answer: 'Sorry about that.',
      score: 34.56
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-14 00:00',
      id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
      question: 'What is a GPU?',
      answer: 'This is what I do every day.',
      score: 7.9
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-15 00:00',
      id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-16 00:00',
      id: '|47ccb11-463f9dec2880da4e.f6036c73_',
      question: 'hello',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-17 00:00',
      id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
      question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-18 00:00',
      id: '|47ccb37-463f9dec2880da4e.f6036c85_',
      question: 'my name is mahendra',
      answer: 'I don\'t have a name.',
      score: 22.1
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-19 00:00',
      id: '|47cca04-463f9dec2880da4e.f6036bef_',
      question: 'how many leaves i can have',
      answer: 'there are 3 months of maternity paid leaves',
      score: 84.32
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-20 00:00',
      id: '|47cca08-463f9dec2880da4e.f6036bf2_',
      question: 'hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-21 00:00',
      id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
      question: 'Weather',
      answer: 'Ok.',
      score: 8.14
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-22 00:00',
      id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-23 00:00',
      id: '|47cca11-463f9dec2880da4e.f6036bf6_',
      question: 'What you have',
      answer: 'This is what I do every day.',
      score: 50.62
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-24 00:00',
      id: '|47cca13-463f9dec2880da4e.f6036bf7_',
      question: 'Where are you',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-25 00:00',
      id: '|47cca80-463f9dec2880da4e.f6036c2a_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-26 00:00',
      id: '|47cca84-463f9dec2880da4e.f6036c2d_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-27 00:00',
      id: '|47cca8d-463f9dec2880da4e.f6036c34_',
      question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
      answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-28 00:00',
      id: '|47cca90-463f9dec2880da4e.f6036c36_',
      question: 'hello',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-04-29 00:00',
      id: '|47ccb28-463f9dec2880da4e.f6036c7c_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-04-30 00:00',
      id: '|47ccb2c-463f9dec2880da4e.f6036c7f_',
      question: 'hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-01 00:00',
      id: '|47ccb2e-463f9dec2880da4e.f6036c80_',
      question: 'who are you',
      answer: 'I don\'t have a name.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-02 00:00',
      id: '|47ccb30-463f9dec2880da4e.f6036c81_',
      question: 'can you tell me what is SAN',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 47.86
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-03 00:00',
      id: '|47ccb35-463f9dec2880da4e.f6036c84_',
      question: 'SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-04 00:00',
      id: '|47cc9f4-463f9dec2880da4e.f6036be4_',
      question: 'can you tell if any holiday exist in month',
      answer: 'there are 2 mandatory holiday and 1 restricted holiday',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-05 00:00',
      id: '|47cc9f7-463f9dec2880da4e.f6036be6_',
      question: 'intent is',
      answer: 'Not at all.',
      score: 8.76
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-06 00:00',
      id: '|47cca5d-463f9dec2880da4e.f6036c14_',
      question: 'SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-07 00:00',
      id: '|47cca60-463f9dec2880da4e.f6036c15_',
      question: 'san Validity?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 99
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-08 00:00',
      id: '|47cca63-463f9dec2880da4e.f6036c16_',
      question: 'san requirement',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 77.02
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-09 00:00',
      id: '|47cca66-463f9dec2880da4e.f6036c17_',
      question: 'san engaging parties?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 99
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-10 00:00',
      id: '|47cca9a-463f9dec2880da4e.f6036c3c_',
      question: 'What is the validity of a SAN?',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-11 00:00',
      id: '|47cca9c-463f9dec2880da4e.f6036c3d_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-12 00:00',
      id: '|47cca9e-463f9dec2880da4e.f6036c3e_',
      question: 'What is SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-13 00:00',
      id: '|47ccaa0-463f9dec2880da4e.f6036c3f_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-14 00:00',
      id: '|47ccaa2-463f9dec2880da4e.f6036c40_',
      question: 'what is SAN',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 98
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-15 00:00',
      id: '|47ccaa4-463f9dec2880da4e.f6036c41_',
      question: 'What is validity',
      answer: 'A SAN is valid until the end of the engagement and up to a maximum of three years. However, the approvers (typically the Sentinel Lead Partner and/or Conflicts Resolver) can restrict the validity of a SAN for a limited period.  A SAN for recurring engagements for a SEC audit client and its affiliates is valid for only one year.  A member firm\'s local policies may require a new SAN more frequently than every three years in certain circumstances.',
      score: 95
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-16 00:00',
      id: '|47ccaa6-463f9dec2880da4e.f6036c42_',
      question: 'Why to use SAN?',
      answer: 'Sentinel is a KPMG software that identifies independence approval requirements and potential conflicts of interest in respect of all proposed engagements from KPMG member firms. After entering the basic engagement information in the Sentinel Request, the tool routes the proposed engagements through a global approval process culminating in a Sentinel Approval Number (SAN) per engagement. It is essential to get a SAN before committing the firm to do an engagement.',
      score: 58.82
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-17 00:00',
      id: '|47ccabf-463f9dec2880da4e.f6036c4f_',
      question: 'okay, can you ask questions to me?',
      answer: 'I\'m better at answering questions.',
      score: 37.75
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-18 00:00',
      id: '|47ccac1-463f9dec2880da4e.f6036c50_',
      question: 'But you are not answering my questions',
      answer: 'Sorry about that.',
      score: 34.56
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-19 00:00',
      id: '|47ccad6-463f9dec2880da4e.f6036c5b_',
      question: 'What is a GPU?',
      answer: 'This is what I do every day.',
      score: 7.9
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-20 00:00',
      id: '|47ccad8-463f9dec2880da4e.f6036c5c_',
      question: 'What is a GUP?',
      answer: 'The Global Ultimate Parent (GUP) is the highest-tiered entity in a family tree in Sentinel. A Sentinel Tree typically consists of all entities that are ultimately controlled by the GUP or the GUP has significant influence.   For example, for all Microsoft Sentinel entities, the GUP will be Microsoft Corporation.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-21 00:00',
      id: '|47ccb11-463f9dec2880da4e.f6036c73_',
      question: 'hello',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-22 00:00',
      id: '|47ccb23-463f9dec2880da4e.f6036c7a_',
      question: 'Who needs to be added as Engaging Parties in a Sentinel Request ?',
      answer: 'The following are to be added as Engaging Parties:  � � �- Any party signing the engagement contract or otherwise bound to the engagement contract.   � � - Any party that is to pay any of the fees for the service.   � � - Any party that has a role in defining the scope of the engagement.   � � - Any party that has a role in selecting KPMG for the service should be listed as an additional Engaging Party  In addition, the� following have to be included as Engaging Parties as well:  � � - a prime contractor hiring KPMG  � � - a subcontractor� of KPMG  � � - a target if the seller is an Engaging Party (in a Deal Advisory engagement)',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-23 00:00',
      id: '|47ccb37-463f9dec2880da4e.f6036c85_',
      question: 'my name is mahendra',
      answer: 'I don\'t have a name.',
      score: 22.1
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-24 00:00',
      id: '|47cca04-463f9dec2880da4e.f6036bef_',
      question: 'how many leaves i can have',
      answer: 'there are 3 months of maternity paid leaves',
      score: 84.32
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-05-25 00:00',
      id: '|47cca08-463f9dec2880da4e.f6036bf2_',
      question: 'hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-26 00:00',
      id: '|47cca0d-463f9dec2880da4e.f6036bf4_',
      question: 'Weather',
      answer: 'Ok.',
      score: 8.14
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-27 00:00',
      id: '|47cca0f-463f9dec2880da4e.f6036bf5_',
      question: 'Hi',
      answer: 'Hello.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-28 00:00',
      id: '|47cca11-463f9dec2880da4e.f6036bf6_',
      question: 'What you have',
      answer: 'This is what I do every day.',
      score: 50.62
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-29 00:00',
      id: '|47cca13-463f9dec2880da4e.f6036bf7_',
      question: 'Where are you',
      answer: 'I\'m digital. I don\'t have a physical location.',
      score: 100
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-30 00:00',
      id: '|47cca80-463f9dec2880da4e.f6036c2a_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89
    },
    {
      title: 'KPMGTeamBot_German',
      timestamp: '2020-05-31 00:00',
      id: '|47cca84-463f9dec2880da4e.f6036c2d_',
      question: 'number of holidays in month',
      answer: 'Thank you, and the same to you.',
      score: 29.89
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-06-01 00:00',
      id: '|47cca8d-463f9dec2880da4e.f6036c34_',
      question: 'Kann PGT-SR auf ausgeglichene Translokationen testen?',
      answer: 'Ja, unser Test kann die unausgeglichenen Formen der ausgeglichensten Translokationen [wechselseitige Translokationen] erkennen. Um zu best�tigen, dass unsere Technologie unausgewogene Formen der Translokation eines Patienten erkennt, m�ssen wir den Karyotyp des Patienten (oder des Partners) vor dem Einreichen von Embryo-Biopsien zum Testen einreichen. Auf diese Weise kann unser genetisches Beratungsteam eine ma�geschneiderte Fallbewertung durchf�hren, um sicherzustellen, dass alle unausgeglichenen Formen der Translokation erkannt werden k�nnen',
      score: 100
    },
    {
      title: 'KteamsChat',
      timestamp: '2020-06-02 00:00',
      id: '|47cca90-463f9dec2880da4e.f6036c36_',
      question: 'hello',
      answer: 'Hello.',
      score: 100
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
    this.selectedDate = null;
    this.filterChats(null);
  }

}
