import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            {/* <Controller 
            // as={TextField}
            render={({ field }) => <TextField {...field} />}
            name={name}
            control={control}
            label={label}
            fullWidth
            required={required}
            /> */}

            {/* <Controller
                as={TextField}
                name={name}
                control={control}
                label={label}
                fullWidth
                required
                error={isError}
            /> */}

            <Controller
                render = {({ field }) => (
                    <TextField
                        name={name}
                        label={label}
                        defaultValue=""
                        fullWidth
                        required
                        onChange={(e) => field.onChange(e.target.value)}
                        value={field.value}
                    />
                )}
                control={control}
                name={name}
            />

        </Grid>
    )
}

export default FormInput;