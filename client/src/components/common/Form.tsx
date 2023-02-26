import { Box, Button, FormControl, TextField, FormHelperText, Typography, 
  TextareaAutosize, Stack, Select, Menu, MenuItem, } from '@pankod/refine-mui';
import { FormProps } from 'interfaces/common';

import CustomBtn  from './CustomBtn';

const Form = ({ type, register, formLoading, handleSubmit, 
    handleImageChange, onFinishHandler, propertyImage, }: FormProps) => {
  return (
    <Box>
      <Typography 
        fontSize={25} 
        fontWeight={600} 
        color="#11142D"
        >
          {type} a Property
      </Typography>

      <Box 
        mt={2.5}
        borderRadius="15px"
        padding="20px"
        bgcolor="#FCFCFC"
      >
        <form
          style={{ 
            marginTop: '20px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
           }}
           onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500, 
              fontSize: 16,
              margin: '10px 0',
              color: '#11142D',
            }}>
              Property Title
            </FormHelperText>
            <TextField 
              fullWidth
              required 
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("title", { required: true })}
            />
          </FormControl>

          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500, 
              fontSize: 16,
              margin: '10px 0',
              color: '#11142D',
            }}>
              Property Description
            </FormHelperText>
            <TextareaAutosize 
              minRows={5}
              required 
              placeholder="Enter Property Description"
              color="info"
              style={{ 
                width: '100%',
                background: 'transparent',
                fontSize: '16px',
                borderColor: 'rgba(0, 0, 0, 0.23)',
                borderRadius: 6,
                padding: 10,
                color: '#919191',
               }}
              {...register('description', { required: true })}
            />
          </FormControl>

          <Stack
            direction="row"
            gap={4}
          >
            <FormControl
              sx={{ flex: 1 }}
            >
              <FormHelperText sx={{
                fontWeight: 500,
                fontSize: 16,
                margin: '10px 0',
                color: '#11142D',
              }}>
                Property Type
              </FormHelperText>

              <Select
                variant='outlined'
                color='info'
                displayEmpty
                required
                inputProps={{
                  'aria-label': 'Without label',
                }}
                defaultValue="apartment"
                {...register('propertyType', { required: true })}
              >
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="townhouse">Townhouse</MenuItem>
                <MenuItem value="farmhouse">Farmhouse</MenuItem>
                <MenuItem value="condos">Condos</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="studio">Studio</MenuItem>
                <MenuItem value="chalet">Chalet</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
            <FormHelperText sx={{
              fontWeight: 500, 
              fontSize: 16,
              margin: '10px 0',
              color: '#11142D',
            }}>
              Property Price
            </FormHelperText>
            <TextField 
              fullWidth
              required 
              type="number"
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register('price', { required: true })}
            />
          </FormControl>
          </Stack>

          <FormControl>
            <FormHelperText sx={{
              fontWeight: 500, 
              fontSize: 16,
              margin: '10px 0',
              color: '#11142D',
            }}>
              Property Location
            </FormHelperText>
            <TextField 
              fullWidth
              required 
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register('location', { required: true })}
            />
          </FormControl>

          <Stack
            direction="column"
            justifyContent="center"
            gap={1}
            mb={2}
          >
            <Stack
              direction="row"
              gap={2}
            >
              <Typography
                color="#11142D"
                fontSize={16}
                fontWeight={500}
                marginY="10px"
              >
                Property Image
              </Typography>

              <Button
                component="label"
                sx={{
                  width: 'fit-content',
                  color: '#2ED480',
                  textTransform: 'capitalize',
                  fontSize: 16,
                }}
              >
                Upload *
                <input 
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => 
                    // @ts-ignore
                  handleImageChange(e.target.files[0])}
                />
              </Button>
            </Stack>

            <Typography
              fontSize={14}
              color="#808191"
              sx={{
                wordBreak: 'break-word',
              }}>
              {propertyImage?.name}
            </Typography>
          </Stack>

          <CustomBtn 
            type="submit"
            title={formLoading ? "Submiting..." : "Submit"}
            backgroundColor="#2ED480"
            color="#FCFCFC"
          />
        </form>
      </Box>
    </Box>
  )
}

export default Form