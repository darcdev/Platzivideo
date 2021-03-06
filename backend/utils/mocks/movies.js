const moviesMock = [
  {
    id: 'df1f42e0-5d31-4062-953d-61816ac3f8e7',
    title: 'Love and Pigeons',
    year: 1995,
    cover: 'http://dummyimage.com/150x250.png/dddddd/000000',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    duration: 100,
    contentRating: 'NC-17',
    source:
      'http://nih.gov/donec.aspx?sollicitudin=nulla&mi=dapibus&sit=dolor&amet=vel&lobortis=est&sapien=donec&sapien=odio&non=justo&mi=sollicitudin&integer=ut&ac=suscipit&neque=a&duis=feugiat&bibendum=et&morbi=eros&non=vestibulum&quam=ac&nec=est&dui=lacinia&luctus=nisi&rutrum=venenatis&nulla=tristique&tellus=fusce&in=congue&sagittis=diam&dui=id&vel=ornare&nisl=imperdiet&duis=sapien&ac=urna&nibh=pretium&fusce=nisl&lacus=ut&purus=volutpat&aliquet=sapien&at=arcu&feugiat=sed&non=augue&pretium=aliquam&quis=erat&lectus=volutpat&suspendisse=in&potenti=congue&in=etiam&eleifend=justo&quam=etiam&a=pretium&odio=iaculis&in=justo&hac=in&habitasse=hac&platea=habitasse&dictumst=platea&maecenas=dictumst&ut=etiam&massa=faucibus&quis=cursus&augue=urna&luctus=ut&tincidunt=tellus&nulla=nulla&mollis=ut&molestie=erat&lorem=id&quisque=mauris&ut=vulputate&erat=elementum&curabitur=nullam&gravida=varius&nisi=nulla&at=facilisi&nibh=cras&in=non&hac=velit&habitasse=nec&platea=nisi&dictumst=vulputate&aliquam=nonummy&augue=maecenas&quam=tincidunt&sollicitudin=lacus&vitae=at&consectetuer=velit&eget=vivamus&rutrum=vel',
    tags: [
      'Crime|Sci-Fi|Thriller',
      'Action|Drama',
      'Drama|Thriller',
      'Drama|Horror|Mystery|Thriller',
    ],
  },
  {
    id: '5c6feb24-753a-4c8d-86af-898218c198ac',
    title: 'Union Square',
    year: 1986,
    cover: 'http://dummyimage.com/120x170.png/5fa2dd/ffffff',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 41,
    contentRating: 'PG',
    source:
      'http://ox.ac.uk/dapibus.html?sapien=pellentesque&in=eget&sapien=nunc&iaculis=donec&congue=quis&vivamus=orci&metus=eget&arcu=orci&adipiscing=vehicula&molestie=condimentum&hendrerit=curabitur&at=in&vulputate=libero&vitae=ut&nisl=massa&aenean=volutpat&lectus=convallis&pellentesque=morbi&eget=odio&nunc=odio&donec=elementum&quis=eu&orci=interdum&eget=eu&orci=tincidunt&vehicula=in&condimentum=leo&curabitur=maecenas&in=pulvinar&libero=lobortis&ut=est&massa=phasellus&volutpat=sit&convallis=amet&morbi=erat&odio=nulla&odio=tempus&elementum=vivamus&eu=in&interdum=felis&eu=eu&tincidunt=sapien&in=cursus&leo=vestibulum&maecenas=proin&pulvinar=eu&lobortis=mi&est=nulla&phasellus=ac&sit=enim&amet=in&erat=tempor&nulla=turpis&tempus=nec&vivamus=euismod&in=scelerisque&felis=quam&eu=turpis&sapien=adipiscing&cursus=lorem&vestibulum=vitae&proin=mattis&eu=nibh&mi=ligula&nulla=nec&ac=sem&enim=duis&in=aliquam&tempor=convallis&turpis=nunc&nec=proin&euismod=at&scelerisque=turpis&quam=a&turpis=pede&adipiscing=posuere&lorem=nonummy&vitae=integer&mattis=non&nibh=velit&ligula=donec&nec=diam&sem=neque&duis=vestibulum&aliquam=eget&convallis=vulputate&nunc=ut&proin=ultrices&at=vel&turpis=augue&a=vestibulum&pede=ante&posuere=ipsum&nonummy=primis',
    tags: [
      'Comedy|Drama',
      'Comedy|Romance',
      'Action|Adventure|Drama|Fantasy',
      'Action|Crime',
    ],
  },
  {
    id: '1a590f21-8e7f-4a99-8013-c59426d884c6',
    title: 'Experience, The (Tadjrebeh)',
    year: 1992,
    cover: 'http://dummyimage.com/227x242.bmp/cc0000/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 37,
    contentRating: 'PG-13',
    source:
      'http://is.gd/augue/quam.json?turpis=interdum&donec=eu&posuere=tincidunt&metus=in&vitae=leo&ipsum=maecenas&aliquam=pulvinar&non=lobortis&mauris=est&morbi=phasellus&non=sit&lectus=amet&aliquam=erat&sit=nulla&amet=tempus&diam=vivamus&in=in&magna=felis&bibendum=eu&imperdiet=sapien&nullam=cursus&orci=vestibulum&pede=proin&venenatis=eu&non=mi&sodales=nulla&sed=ac&tincidunt=enim&eu=in&felis=tempor&fusce=turpis&posuere=nec&felis=euismod&sed=scelerisque&lacus=quam&morbi=turpis&sem=adipiscing&mauris=lorem&laoreet=vitae&ut=mattis&rhoncus=nibh&aliquet=ligula&pulvinar=nec&sed=sem',
    tags: [
      'Action|Documentary|Drama|Romance|War',
      'Documentary',
      'Comedy|Drama',
    ],
  },
  {
    id: 'dd09103a-c8f9-4bad-a9ba-986411537ce0',
    title: 'Outrageous Fortune',
    year: 1991,
    cover: 'http://dummyimage.com/205x223.bmp/cc0000/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 91,
    contentRating: 'R',
    source:
      'https://blog.com/donec/quis/orci/eget/orci/vehicula/condimentum.png?et=ligula&magnis=sit&dis=amet&parturient=eleifend&montes=pede&nascetur=libero&ridiculus=quis&mus=orci&etiam=nullam&vel=molestie&augue=nibh&vestibulum=in&rutrum=lectus&rutrum=pellentesque&neque=at&aenean=nulla&auctor=suspendisse&gravida=potenti&sem=cras&praesent=in&id=purus&massa=eu&id=magna&nisl=vulputate&venenatis=luctus&lacinia=cum&aenean=sociis&sit=natoque&amet=penatibus&justo=et&morbi=magnis&ut=dis',
    tags: ['Children|Comedy|Musical'],
  },
  {
    id: 'de37972a-00f9-4392-af28-bcbcc6868f9e',
    title: 'Bedrooms & Hallways',
    year: 2001,
    cover: 'http://dummyimage.com/249x110.png/ff4444/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 90,
    contentRating: 'G',
    source:
      'https://alibaba.com/in/consequat/ut/nulla/sed/accumsan/felis.html?cubilia=felis&curae=fusce&donec=posuere&pharetra=felis&magna=sed&vestibulum=lacus&aliquet=morbi&ultrices=sem&erat=mauris&tortor=laoreet&sollicitudin=ut&mi=rhoncus&sit=aliquet&amet=pulvinar&lobortis=sed&sapien=nisl&sapien=nunc&non=rhoncus&mi=dui&integer=vel&ac=sem&neque=sed&duis=sagittis&bibendum=nam&morbi=congue&non=risus&quam=semper&nec=porta&dui=volutpat&luctus=quam&rutrum=pede&nulla=lobortis&tellus=ligula&in=sit&sagittis=amet&dui=eleifend&vel=pede&nisl=libero&duis=quis&ac=orci&nibh=nullam&fusce=molestie&lacus=nibh&purus=in&aliquet=lectus&at=pellentesque&feugiat=at&non=nulla&pretium=suspendisse&quis=potenti&lectus=cras&suspendisse=in&potenti=purus&in=eu&eleifend=magna&quam=vulputate&a=luctus&odio=cum&in=sociis&hac=natoque&habitasse=penatibus&platea=et&dictumst=magnis&maecenas=dis&ut=parturient&massa=montes&quis=nascetur&augue=ridiculus&luctus=mus&tincidunt=vivamus&nulla=vestibulum&mollis=sagittis',
    tags: ['Adventure|War|Western'],
  },
  {
    id: '3fb1994c-49b7-4c4d-afb7-3c34b675c16e',
    title: 'Me & Isaac Newton',
    year: 2006,
    cover: 'http://dummyimage.com/139x197.bmp/dddddd/000000',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 63,
    contentRating: 'NC-17',
    source:
      'http://umn.edu/turpis/eget/elit.xml?orci=mauris&nullam=morbi&molestie=non&nibh=lectus&in=aliquam&lectus=sit&pellentesque=amet',
    tags: ['Adventure|Comedy|Musical', 'Action|Adventure|Thriller|War'],
  },
  {
    id: '2119d238-fa7f-4b10-9a0e-3be9899003f9',
    title: 'Sheriff and the Satellite Kid, The',
    year: 1993,
    cover: 'http://dummyimage.com/182x220.jpg/ff4444/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    duration: 35,
    contentRating: 'PG',
    source:
      'http://adobe.com/felis.xml?justo=odio&in=porttitor&hac=id&habitasse=consequat&platea=in&dictumst=consequat&etiam=ut&faucibus=nulla&cursus=sed&urna=accumsan&ut=felis&tellus=ut&nulla=at&ut=dolor&erat=quis&id=odio&mauris=consequat&vulputate=varius&elementum=integer&nullam=ac&varius=leo&nulla=pellentesque&facilisi=ultrices&cras=mattis&non=odio&velit=donec&nec=vitae&nisi=nisi&vulputate=nam&nonummy=ultrices&maecenas=libero&tincidunt=non&lacus=mattis&at=pulvinar&velit=nulla&vivamus=pede&vel=ullamcorper&nulla=augue&eget=a&eros=suscipit&elementum=nulla&pellentesque=elit&quisque=ac&porta=nulla&volutpat=sed&erat=vel&quisque=enim&erat=sit&eros=amet&viverra=nunc&eget=viverra&congue=dapibus&eget=nulla&semper=suscipit&rutrum=ligula&nulla=in&nunc=lacus&purus=curabitur&phasellus=at&in=ipsum&felis=ac&donec=tellus&semper=semper&sapien=interdum&a=mauris&libero=ullamcorper&nam=purus&dui=sit&proin=amet&leo=nulla&odio=quisque&porttitor=arcu&id=libero&consequat=rutrum&in=ac&consequat=lobortis&ut=vel&nulla=dapibus&sed=at&accumsan=diam&felis=nam&ut=tristique&at=tortor&dolor=eu',
    tags: [
      'Drama',
      'Action|Adventure|Children|Comedy|Fantasy',
      'Comedy|Fantasy',
      'Documentary',
      'Comedy|Drama|Mystery|Thriller',
    ],
  },
  {
    id: 'a9af0637-c4a1-4a09-bcf1-3df47b9f0c49',
    title: 'Little Manhattan',
    year: 1998,
    cover: 'http://dummyimage.com/115x225.jpg/dddddd/000000',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 28,
    contentRating: 'G',
    source:
      'http://economist.com/aenean/fermentum.aspx?sit=consequat&amet=morbi&lobortis=a&sapien=ipsum&sapien=integer&non=a&mi=nibh&integer=in&ac=quis&neque=justo&duis=maecenas&bibendum=rhoncus&morbi=aliquam&non=lacus&quam=morbi&nec=quis&dui=tortor&luctus=id&rutrum=nulla&nulla=ultrices&tellus=aliquet&in=maecenas&sagittis=leo&dui=odio&vel=condimentum&nisl=id&duis=luctus&ac=nec&nibh=molestie&fusce=sed&lacus=justo&purus=pellentesque&aliquet=viverra&at=pede&feugiat=ac&non=diam&pretium=cras&quis=pellentesque&lectus=volutpat&suspendisse=dui&potenti=maecenas&in=tristique&eleifend=est&quam=et&a=tempus&odio=semper&in=est&hac=quam&habitasse=pharetra&platea=magna&dictumst=ac&maecenas=consequat&ut=metus&massa=sapien&quis=ut&augue=nunc&luctus=vestibulum&tincidunt=ante&nulla=ipsum&mollis=primis&molestie=in&lorem=faucibus&quisque=orci&ut=luctus&erat=et&curabitur=ultrices&gravida=posuere&nisi=cubilia',
    tags: ['Drama', 'Action|Comedy|Crime', 'Documentary|Drama|War'],
  },
  {
    id: '75fcd49c-e56b-4c4f-95ba-43fdba76d858',
    title: 'Secret Garden, The',
    year: 2008,
    cover: 'http://dummyimage.com/243x150.png/5fa2dd/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    duration: 42,
    contentRating: 'PG-13',
    source:
      'http://vistaprint.com/mi/integer/ac/neque/duis/bibendum.xml?at=tempus&turpis=semper&donec=est&posuere=quam&metus=pharetra&vitae=magna&ipsum=ac&aliquam=consequat&non=metus&mauris=sapien&morbi=ut&non=nunc&lectus=vestibulum&aliquam=ante&sit=ipsum&amet=primis&diam=in&in=faucibus&magna=orci&bibendum=luctus&imperdiet=et&nullam=ultrices&orci=posuere&pede=cubilia&venenatis=curae&non=mauris&sodales=viverra&sed=diam&tincidunt=vitae&eu=quam&felis=suspendisse&fusce=potenti&posuere=nullam&felis=porttitor&sed=lacus&lacus=at&morbi=turpis&sem=donec&mauris=posuere&laoreet=metus&ut=vitae&rhoncus=ipsum&aliquet=aliquam&pulvinar=non&sed=mauris&nisl=morbi&nunc=non&rhoncus=lectus&dui=aliquam&vel=sit&sem=amet&sed=diam&sagittis=in&nam=magna&congue=bibendum&risus=imperdiet&semper=nullam&porta=orci&volutpat=pede&quam=venenatis&pede=non&lobortis=sodales&ligula=sed&sit=tincidunt&amet=eu&eleifend=felis&pede=fusce&libero=posuere&quis=felis&orci=sed&nullam=lacus&molestie=morbi&nibh=sem&in=mauris&lectus=laoreet&pellentesque=ut&at=rhoncus&nulla=aliquet&suspendisse=pulvinar&potenti=sed&cras=nisl&in=nunc&purus=rhoncus&eu=dui&magna=vel',
    tags: ['Animation|Children', 'Drama|War', 'Comedy|Fantasy', 'Comedy|Drama'],
  },
  {
    id: 'a4592f4e-f495-4e5b-a1b7-9d2f5d271e60',
    title: 'Windtalkers',
    year: 2008,
    cover: 'http://dummyimage.com/218x151.png/ff4444/ffffff',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 82,
    contentRating: 'G',
    source:
      'http://sciencedirect.com/eu.aspx?nisi=enim&at=in&nibh=tempor&in=turpis&hac=nec&habitasse=euismod&platea=scelerisque&dictumst=quam&aliquam=turpis&augue=adipiscing&quam=lorem&sollicitudin=vitae&vitae=mattis&consectetuer=nibh&eget=ligula&rutrum=nec&at=sem&lorem=duis&integer=aliquam&tincidunt=convallis&ante=nunc&vel=proin&ipsum=at&praesent=turpis&blandit=a&lacinia=pede&erat=posuere&vestibulum=nonummy&sed=integer&magna=non&at=velit&nunc=donec&commodo=diam&placerat=neque&praesent=vestibulum&blandit=eget&nam=vulputate&nulla=ut&integer=ultrices&pede=vel&justo=augue&lacinia=vestibulum&eget=ante&tincidunt=ipsum&eget=primis&tempus=in&vel=faucibus&pede=orci&morbi=luctus&porttitor=et&lorem=ultrices&id=posuere&ligula=cubilia&suspendisse=curae&ornare=donec&consequat=pharetra&lectus=magna&in=vestibulum&est=aliquet&risus=ultrices&auctor=erat&sed=tortor&tristique=sollicitudin&in=mi&tempus=sit&sit=amet&amet=lobortis&sem=sapien&fusce=sapien',
    tags: ['Drama|Thriller', 'Horror'],
  },
];

function filteredMoviesMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MovieServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }
  async getMovie() {
    return Promise.resolve(moviesMock[0]);
  }
  async createMovie() {
    return Promise.resolve(moviesMock[0].id);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MovieServiceMock,
};
