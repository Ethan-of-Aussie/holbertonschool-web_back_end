function getListStudentIds(ids){
    if (!Array.isArray(ids)){
        return []
    }
    else
  {  const id = ids.map(a => a.id);
    return id;}

}

export default getListStudentIds;