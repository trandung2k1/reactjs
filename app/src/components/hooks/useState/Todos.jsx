import React from 'react';
import { Button, TextField, Container, Grid, List, ListItemText, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { toast } from 'react-toastify';
const Todos = () => {
    const [todos, setTodos] = React.useState([
        {
            id: 1,
            title: 'Todos',
            completed: true,
        },
    ]);
    const [title, setTitle] = React.useState('');
    const handleAddTodo = () => {
        const todo = {
            id: Math.floor(Math.random() * 10000),
            title,
            completed: false,
        };
        setTodos((prev) => [...prev, todo]);
        setTitle('');
        toast.success('Added todo successfully');
    };
    const handleChange = (id) => {
        const changeData = todos.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
        setTodos(changeData);
        toast.success('Updated successfully');
    };
    const handleDelete = (id) => {
        const filterData = todos.filter((item) => item.id !== id);
        setTodos(filterData);
        toast.error('Deleted todo successfully');
    };
    return (
        <Container>
            <h1>Todos</h1>
            <Grid container>
                <Grid>
                    <TextField
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        label="Title"
                        required
                        id="outlined-required"
                        size="small"
                    />
                </Grid>
                <Grid>
                    <Button variant="contained" size="large" onClick={handleAddTodo}>
                        Add todo
                    </Button>
                </Grid>
            </Grid>
            <Grid>
                <List>
                    {todos.map((item) => {
                        return (
                            <ListItem
                                key={item.id}
                                secondaryAction={
                                    <DeleteIcon onClick={() => handleDelete(item.id)} />
                                }
                            >
                                <ListItemText
                                    style={{
                                        textDecoration: item.completed ? 'line-through' : 'none',
                                    }}
                                >
                                    {item.title}
                                </ListItemText>
                                <Checkbox
                                    checked={item.completed}
                                    onChange={() => handleChange(item.id)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Grid>
        </Container>
    );
};

export default Todos;
