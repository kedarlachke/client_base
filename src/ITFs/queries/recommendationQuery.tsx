import gql from 'graphql-tag';
//export default tmasterdocList ()
export default gql`
query($applicationid:String!,$client:String!,$lang:String!,$z_id:String)
{
  recommendations(
	  applicationid:$applicationid,
    client:$client,
    lang:$lang,
    z_id:$z_id
  )
  {
    z_id
    applicationid
    client
    lang
    name
    recodate
    cmp
    addupto
    sl
    target1
    target2
    target3
    target4
    target5
    target6
    target7
    target8
    target9
    weightage
    timeframe
    cdate
    ctime
    cuser
    udate
    utime
    uuser
    ddate
    dtime
    duser
    isdeleted
  }
}

`;