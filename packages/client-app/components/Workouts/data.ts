export const data = {
  data: [
    {
      id: 1,
      attributes: {
        title: 'test-workout',
        createdAt: '2023-02-11T14:53:19.858Z',
        updatedAt: '2023-02-11T14:54:40.130Z',
        publishedAt: '2023-02-11T14:53:21.146Z',
        exercise_datum: {
          data: {
            id: 1,
            attributes: {
              createdAt: '2023-02-11T06:23:29.042Z',
              updatedAt: '2023-02-11T14:57:11.153Z',
              publishedAt: '2023-02-11T06:23:30.108Z',
              body_part: {
                data: {
                  id: 1,
                  attributes: {
                    partName: 'chest',
                    createdAt: '2023-02-11T05:24:23.813Z',
                    updatedAt: '2023-02-11T05:24:35.573Z',
                    publishedAt: '2023-02-11T05:24:35.571Z',
                  },
                },
              },
              user_exercises: {
                data: [
                  {
                    id: 1,
                    attributes: {
                      reps: 10,
                      weight: 10,
                      time: null,
                      set: 4,
                      createdAt: '2023-02-11T14:55:39.525Z',
                      updatedAt: '2023-02-11T14:55:40.189Z',
                      publishedAt: '2023-02-11T14:55:40.187Z',
                      exercise: {
                        data: {
                          id: 4,
                          attributes: {
                            exerciseId: 'bench-press',
                            title: 'Bench Press',
                            videoUrl:
                              'https://www.youtube.com/watch?v=rT7DgCr-3pg',
                            createdAt: '2023-02-11T05:36:25.704Z',
                            updatedAt: '2023-02-11T05:36:26.266Z',
                            publishedAt: '2023-02-11T05:36:26.264Z',
                          },
                        },
                      },
                    },
                  },
                  {
                    id: 2,
                    attributes: {
                      reps: 10,
                      weight: 10,
                      time: null,
                      set: 4,
                      createdAt: '2023-02-11T14:56:10.250Z',
                      updatedAt: '2023-02-11T14:56:10.907Z',
                      publishedAt: '2023-02-11T14:56:10.905Z',
                      exercise: {
                        data: {
                          id: 1,
                          attributes: {
                            exerciseId: 'push-ups',
                            title: 'Push-Ups',
                            videoUrl:
                              'https://www.youtube.com/watch?v=Jf5_PJCFs-g',
                            createdAt: '2023-02-11T05:24:04.958Z',
                            updatedAt: '2023-02-11T05:28:52.325Z',
                            publishedAt: '2023-02-11T05:24:06.852Z',
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 1,
    },
  },
};
