import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
  .from('cabins')
  .select('*')

  if(error) {
    console.log(error);
    throw new Error('cabin could not be loaded')
  }

  return data;
} 

export async function deleteCabins(id: string) {
const { data,  error } = await supabase
.from('cabins')
.delete()
.eq('id', id)

if(error) {
  console.log(error);
  throw new Error('cabin could not be deleted ')
}

return data;
}