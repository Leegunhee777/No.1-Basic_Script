//사용할 State
comment
fetchingCoachComment: false,
postingCoachComment: false,
editingCoachComment: false,
deletingCoachComment: false,
///////////////////////컴포넌트에서 직접쓰이는 함수.

//액션함수
export const GET_COACH_COMMENT_START = "GET_COACH_COMMENT_START";
export const GET_COACH_COMMENT_SUCCESS = "GET_COACH_COMMENT_SUCCESS";


export const POST_COACH_COMMENT_START = "POST_COACH_COMMENT_START";
export const POST_COACH_COMMENT_SUCCESS = "POST_COACH_COMMENT_SUCCESS";
export const POST_COACH_COMMENT_FAIL = "POST_COACH_COMMENT_FAIL";

export const EDIT_COACH_COMMENT_START = "EDIT_COACH_CHAT_NOTICE_START";
export const EDIT_COACH_COMMENT_SUCCESS = "EDIT_COACH_COMMENT_SUCCESS";
export const EDIT_COACH_COMMENT_FAIL = "EDIT_COACH_COMMENT_FAIL";

export const DELETE_COACH_COMMENT_START = "DELETE_COACH_COMMENT_START";
export const DELETE_COACH_COMMENT_SUCCESS = "DELETE_COACH_COMMENT_SUCCESS";
export const DELETE_COACH_COMMENT_FAIL = "DELETE_COACH_COMMENT_FAIL";
//////////////////////////////////////////////////////////////////
//리듀서
case GET_COACH_COMMENT_START: {
    return {
      ...state,
      fetchingCoachComment: true,
    };
  }
 
  case GET_COACH_COMMENT_SUCCESS: {
    return {
      ...state,
      fetchingCoachComment: false,
      comment: action.payload,
    };
  }

  case POST_COACH_COMMENT_START: {
    return {
      ...state,
      postingCoachComment: true,
    };
  }

  case POST_COACH_COMMENT_SUCCESS: {
    return {
      ...state,
      postingCoachComment: false,
      comment: action.payload,
    };
  }

  case POST_COACH_COMMENT_FAIL: {
    return {
      ...state,
      postingCoachComment: false,
    };
  }
 
  
  case EDIT_COACH_COMMENT_START: {
    return {
      ...state,
      editingCoachComment: true,
    };
  }

  case EDIT_COACH_COMMENT_SUCCESS: {
    return {
      ...state,
      editingCoachComment: false,
      comment: action.payload,
    };
  }

  case EDIT_COACH_COMMENT_FAIL: {
    return {
      ...state,
      editingCoachComment: false,
    };
  }
  
    
  case DELETE_COACH_COMMENT_START: {
    return {
      ...state,
      deletingCoachComment: true,
    };
  }

  case DELETE_COACH_COMMENT_SUCCESS: {
    return {
      ...state,
      deletingCoachComment: false,
      comment: action.payload,
    };
  }

  case DELETE_COACH_COMMENT_FAIL: {
    return {
      ...state,
      deletingCoachComment: false,
    };
  }

  //////////////////////////////////////////////////////////
//아래의 함수들은 액션함수임 '../../../redux/actions/coach/coachActions'에 선언
//fectch관련
//fetchCoachCommentStartAsync

export const fetchCoachCommentStart = () => ({
    type: GET_COACH_COMMENT_START,
  });
  
  export const fetchCoachCommentSuccess = (notices) => ({
    type: GET_COACH_COMMENT_SUCCESS,
    payload: notices,
  });

  
  
  export const fetchCoachCommentStartAsync = (coach) => async (dispatch) => {
    dispatch(fetchCoachCommentStart());
    try {
      const getChatNoticesUrl = `${serverApiUrl}/internal/op/staff/staffs/${coach.id}/chats/notice`;
      APIServerCall.serverApiCallGet({
        link: getChatNoticesUrl,
        params: {
          staffId: coach.id,
          all: true,
        },
      })
        .then((res) => {
          dispatch(fetchCoachCommentSuccess(res.data));
        })
        .catch((err) => {
          if (err.response.status === 404) {
            dispatch(fetchCoachCommentSuccess([]));
          } else if (err.response.status === 500) {
            console.log('server error');
          } else {
            console.log('error_Type1');
            console.error(err);
          }
        });
    } catch (error) {
      console.log('Need My Code Fixed error_Type2');
      console.error(error);
    }
  };
//post관련///////////////////////////////////////////////////////////////////////////////////////////////
//addCoachCommentStartAsync
export const addCoachCommentStart = () => ({
    type: POST_COACH_COMMENT_START,
  });
  
  export const addCoachCommentSuccess = (successMsg) => ({
    type: POST_COACH_COMMENT_SUCCESS,
    payload: successMsg,
    meta: {
      notification: {
        success: 'Successfully created the notice!',
        warning: false,
      },
    },
  });
  
  export const addCoachCommentFail = (error) => ({
    type: POST_COACH_COMMENT_FAIL,
    payload: error,
    meta: {
      notification: {
        error,
        warning: true,
      },
    },
  });
  
  export const addCoachCommentStartAsync = (coach, notice, callback) => async (
    dispatch
  ) => {
    try {
      dispatch(addCoachCommentStart());
  
      const addNoticeUrl = `${serverApiUrl}/internal/op/staff/staffs/${coach.id}/chats/notice`;
      await APIServerCall.serverApiCallPost({
        link: addNoticeUrl,
        body: notice,
      })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            callback();
            dispatch(addCoachCommentSuccess(notice));
          }
        })
        .catch((err) => {
          //2) 정상처리 되지 않았다면
          callback(err);
          dispatch(
            addCoachCommentFail(
              "Something went wrong with our servers. We're on it!"
            )
          );
          if (err.response.status === 500) {
            console.log('The error in Server');
            console.error(err.response.message);
          }
        });
    } catch (error) {
      console.log('Need MyCode Fixed');
      console.error(error);
    }
  };
  
//edit관련//////////////////////////////////////////////////////////////////////////////////////////////////
//editCoachCommentStartAsync
export const editCoachCommentStart = () => ({
    type: EDIT_COACH_COMMENT_START,
  });
  
  
  export const editCoachCommentSuccess = (successMsg) => ({
    type: EDIT_COACH_COMMENT_SUCCESS,
    payload: successMsg,
    meta: {
      notification: {
        success: 'Successfully edited the notice!',
        warning: false,
      },
    },
  });
  
  export const editCoachCommentFail = (error) => ({
    type: EDIT_COACH_COMMENT_FAIL,
    payload: error,
    meta: {
      notification: {
        error,
        warning: true,
      },
    },
  });
  
  export const editCoachCommentStartAsync = (
    coach,
    notice,
    callback
  ) => async (dispatch) => {
    try {
      dispatch(editCoachCommentStart());
      const editNoticeUrl = `${serverApiUrl}/internal/op/staff/staffs/${coach.id}/chats/notice`;
  
      await APIServerCall.serverApiCallPut({
        link: editNoticeUrl,
        body: notice,
      })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            callback();
            dispatch(editCoachCommentSuccess(notice));
          }
        })
        .catch((err) => {
          callback(err);
          dispatch(
            editCoachCommentFail(
              "Something went wrong while editing this notice. We're on it!"
            )
          );
          if (err.response.status === 500) {
            console.log('The error in Server');
            console.error(err.response.message);
          }
        });
    } catch (error) {
      console.log('Need MyCode Fixed');
      console.error(error);
    }
  };

//delete관련
//deleteCoachCommentStartAsync//////////////////////////////////////////////////////////////////////////
export const deleteCoachCommentStart = () => ({
    type: DELETE_COACH_COMMENT_START,
  });
  
  
  export const deleteCoachCommentSuccess = (successMsg) => ({
    type: DELETE_COACH_COMMENT_SUCCESS,
    payload: successMsg,
    meta: {
      notification: {
        success: 'Successfully deleted the notice!',
        warning: false,
      },
    },
  });
  
  export const deleteCoachCommentFail = (error) => ({
    type: DELETE_COACH_COMMENT_FAIL,
    payload: error,
    meta: {
      notification: {
        error,
        warning: true,
      },
    },
  });
  
  export const deleteCoachCommentStartAsync = (
    coach,
    notice,
    callback
  ) => async (dispatch) => {
    try {
      dispatch(deleteCoachCommentStart());
      const editNoticeUrl = `${serverApiUrl}/internal/op/staff/staffs/${coach.id}/chats/notice`;
  
      await APIServerCall.serverApiCallPut({
        link: editNoticeUrl,
        body: notice,
      })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            callback();
            dispatch(deleteCoachCommentSuccess(notice));
          }
        })
        .catch((err) => {
          callback(err);
          dispatch(
            deleteCoachCommentFail(
              "Something went wrong while editing this notice. We're on it!"
            )
          );
          if (err.response.status === 500) {
            console.log('The error in Server');
            console.error(err.response.message);
          }
        });
    } catch (error) {
      console.log('Need MyCode Fixed');
      console.error(error);
    }
  };