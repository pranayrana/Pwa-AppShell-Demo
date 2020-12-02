import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InMemoryHeroService } from './in-memory-hero.service';


describe('InMemoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [InMemoryHeroService],
    imports: [
        HttpClientTestingModule
      ]
  }));

  it('Get works properly', () => {
    const httpTestingController = TestBed.get(HttpTestingController);
    const service: InMemoryHeroService = TestBed.get(InMemoryHeroService);

    const testObj = [{id:1, name:'pranay'}];


    service.getHeroes().subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testObj)
    );

    const req = httpTestingController.expectOne('http://localhost:8080/api/heroes');
    expect(req.request.method).toEqual('GET');
    req.flush(testObj);
  });
});


// it('returned Observable should match the right data', () => {
//     const mockCourse = {
//       name: 'Chessable',
//       description: 'Space repetition to learn chess, backed by science'
//     };

//     service.addCourse({ topicId: 1 })
//       .subscribe(courseData => {
//         expect(courseData.name).toEqual('Chessable');
//       });

//     const req = httpTestingController.expectOne('http://localhost:8089/topics/1/courses');

//     expect(req.request.method).toEqual('POST');

//     req.flush(mockCourse);
//   });
