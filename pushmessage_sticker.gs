const TOKEN = 'LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)';
const DEBUGID = 'LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)';

//LINEBOTでスタンプメッセージを送るサンプル
function pushmessage_sticker() {
  //スタンプメッセージを送る
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TOKEN, //LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)
    },
    'method': 'POST',
    'payload': JSON.stringify({
      'to': DEBUGID, //LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)
      'messages': [{
        'type': 'sticker',
        'packageId': '11538',
        'stickerId': '51626494'//スタンプリスト：https://developers.line.biz/media/messaging-api/sticker_list.pdf
      }],
      'notificationDisabled': false // trueだとユーザーに通知されない
    }),
  });
}